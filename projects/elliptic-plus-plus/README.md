# Elliptic++ Threat Intelligence Platform

Elliptic++ has two parts: a **Fraud Ops Dashboard** for exploring the Elliptic Bitcoin transaction graph and a **Banking Console** for bank-style alert handling. The backend loads the full graph, scores transactions with a temporal GATv2 model, explains suspicious scores, and streams sample events to the UI.

## What the app does, in plain English

1. The dataset is a graph of Bitcoin transactions. Each transaction is a node; a payment between two transactions is an edge.
2. The GATv2 model has learned from older labelled months which patterns look like illicit activity. It scores new transactions from later months.
3. The dashboard shows a live-looking feed of those scores. Clicking a transaction asks the backend for a 2-hop neighbourhood and the features/links that most influenced that score.
4. The 2D evidence map shows the selected transaction in the centre, its neighbours around it, and link thickness/percentage for influence. There is no 3D rendering or WebGL, so it is fast and readable.
5. An analyst can confirm fraud or flag a false positive. Those labels are stored, queued for a small fine-tune, and can be applied via `POST /api/feedback/retrain`.

The app exists to make a graph model inspectable: not just “this is fraud”, but “these are the nearby transactions and signals that drove the decision”.

### Why the page shows only a few rows

The full dataset is loaded in the backend, but the UI shows summaries and samples so the browser stays fast:

- **203,769 nodes** and **234,355 edges** are loaded for scoring.
- KPIs and the volume chart use all **46,564 labelled nodes**.
- The feed shows **10 sampled test nodes** by default; the live list keeps the latest **10** events.
- Splits are **29,894 train / 9,983 validation / 6,687 test**. The other **157,205** nodes are unknown/unlabelled, so they stay in the graph but are not used for supervised testing.
- The Banking Console ledger is separate demo data in `data/banking.db`; it starts with accounts and only the transactions you create.

## What is implemented

- **Data:** PyG `EllipticBitcoinDataset` (203,769 transactions, 234,355 payment edges) with time steps and original `txId` restored from the raw CSVs.
- **Labels:** Elliptic raw class `1` is illicit, raw class `2` is licit. PyG encodes these as `y=1` and `y=0`; unknown is `y=2`. All training, metrics, API risk scores, Neo4j labels, and UI groups use this mapping.
- **Temporal splits:** train steps 1–34, validation 35–42, test 43–49. Unknown-labeled nodes are excluded. No test data is used for model selection.
- **Model:** `AdvancedTemporalGAT` uses GATv2 attention plus a continuous time-step projection (value + sin/cos) so unseen time steps generalize. Legacy GATv2 checkpoints still load through `build_model`.
- **Explainability:** `GNNExplainer` runs on the target's relabeled 2-hop subgraph. Feature importance, edge importance, and original node IDs are returned to the dashboard. Feature names are grouped by Elliptic's anonymized feature ranges, not invented heuristics.
- **Serving:** FastAPI with configurable CORS, cached probabilities, calibrated decision threshold, health/stats/timeline endpoints, WebSocket feed, active-learning feedback, and optional Neo4j-backed subgraph queries.
- **Streaming:** Redis Streams producer publishes scored transactions; WebSocket clients subscribe through the broker. Falls back to an in-process queue if Redis is unavailable.
- **Storage:** Neo4j importer writes nodes and `FLOWS_TO` edges in batches; `USE_NEO4J=true` switches API subgraph/feed/stats queries to Cypher.
- **LLM:** Local Ollama (`llama3`) generates short threat reports with a deterministic fallback when Ollama is unavailable.
- **Frontend:** React + Vite, real API-driven KPIs, temporal playback slider, Recharts volume chart, lightweight SVG 2-hop evidence map with edge importance and legend, responsive layout, reconnecting WebSocket.

## Enterprise banking console

The app now includes a bank-style operations workspace backed by a persistent SQLite database at `data/banking.db`:

- **Users and roles:** `admin`, `analyst`, `reviewer`; PBKDF2 password hashing, 8-hour bearer sessions, rotating 7-day refresh tokens, TOTP MFA setup/enrollment, password reset, and login rate limiting.
- **Accounts and ledger:** every transaction posts two signed double-entry ledger rows to the customer and internal clearing accounts; statements expose a running balance.
- **Transactions:** create a transaction with an optional Elliptic model node ID and idempotency key; the model scores it, sanctions screening runs, and it is flagged when risk ≥ threshold or the counterparty hits the watchlist.
- **Alerts and cases:** priority/SLA timers, breach highlighting, single and bulk assignment/resolution, case notes, text evidence attachments, and notifications.
- **Model governance:** registered model versions with activate and rollback endpoints.
- **Audit trail:** login, refresh, MFA, user creation, password reset, screening, transaction creation, assignment, resolution, case evidence, model activation, and backup events; exportable as immutable-style CSV.
- **Backups:** admin-triggered SQLite backup into `data/backups`; `BANKING_DB_URL` allows an external database instead.
- **Access control:** analysts handle alerts and transactions; reviewers read audit and manage model versions; admins manage users, accounts, and backups.
- **UI:** global search, status/severity filters, pagination, CSV exports, case workspace, notification inbox, dark mode, keyboard focus states, and lazy-loaded Recharts bundle.

Demo credentials (seeded on first start):

| user | password | role |
| --- | --- | --- |
| `admin` | `admin123` | admin |
| `analyst` | `analyst123` | analyst |
| `reviewer` | `reviewer123` | reviewer |

Open the frontend, sign in, then use **Banking Console** for bank operations or **Fraud Ops Dashboard** for the model investigation view.

This is an enterprise-style MVP, not a certified production bank: real deployment still requires external KYC/AML providers, core-ledger integration, SSO, hardware-backed secrets, immutable WORM audit storage, penetration testing, and regulatory controls.

## Current status

The requested build is complete and verified: **11 pytest tests pass**, frontend lint/build pass, `docker compose config` is valid, and live API smoke checks pass. The Docker daemon was unavailable here, so the containerized Neo4j/Redis/Ollama stack was not started; the app falls back to in-memory graph queries, in-process streaming, and deterministic reports.

## Quick start (local)

Prerequisites: Python 3.11+, Node 20+, optional Redis/Neo4j/Ollama.

```bash
python -m pip install -r requirements.txt
./run_app.sh
```

Open the dashboard at `http://localhost:5173` and API docs at `http://localhost:8000/docs`. Without Redis/Neo4j/Ollama the app automatically uses in-process streaming, in-memory graph queries, and deterministic LLM fallback.

Enable the full stack locally with services running:

```bash
cp .env.example .env
export USE_NEO4J=true REDIS_URL=redis://localhost:6379/0 LLM_URL=http://localhost:11434
python -m src.export_to_neo4j
./run_app.sh
```

## Quick start (Docker)

```bash
docker compose up --build
```

This starts Redis, Neo4j, the one-shot Neo4j importer, Ollama (pulls `llama3`), FastAPI, and the Vite frontend. Neo4j UI is at `http://localhost:7474` (`neo4j` / `password`). The frontend is at `http://localhost:5173`.

## Training and metrics

```bash
python -m src.train --epochs 40 --patience 8 --lr 0.001 --compare
```

Latest saved results (`metrics.json`):

| model | test F1 (illicit) | PR-AUC | ROC-AUC |
| --- | ---: | ---: | ---: |
| AdvancedTemporalGAT (hidden 128) | 0.101 / 0.103 tuned | 0.075 | 0.779 |
| GraphSAGE | 0.038 | 0.033 | 0.652 |
| MLP | 0.046 | 0.044 | 0.729 |

The served threshold is tuned on validation only. Because missing illicit transactions is costlier than false alarms, it maximises F2 (`beta=2`) on validation (`0.55`, validation F2 `0.549`) and is saved in `serving_config.json`; that gives test F1 `0.103` versus `0.101` at the argmax threshold. The test period has only 2.5% illicit transactions, so PR-AUC is low; these numbers are intentionally reported instead of the previous unverified 0.98 claim. Feature-only baselines reach about 0.052 PR-AUC, so the temporal shift is genuinely difficult.

### Does the model need more training?

Not simply more epochs. Training already early-stops on validation F1 (`patience 10`), so extra epochs overfit. The useful change was widening the model from `hidden_dim=64` to `128`, selected on validation PR-AUC: validation PR-AUC improved from `0.299` to `0.390`, and test PR-AUC from `0.049` to `0.075`. To push metrics higher, the highest-value work is: more labelled illicit examples, forward-chaining validation across more time steps, temporal/sequence features, class-balance tuning, and an ensemble of GATv2 + tabular models. Use `python -m src.train --device cpu --epochs 40 --patience 10 --lr 0.001` as the baseline command.

## API endpoints

- `GET /api/health` — model, backend, stream mode, threshold.
- `GET /api/stats` — dashboard KPIs.
- `GET /api/timeline` — illicit/licit counts per time step.
- `GET /api/time-steps` — available test time steps.
- `GET /api/feed?limit=10&time_step=43` — sampled scored transactions.
- `POST /api/feed/refresh` — publish one new stream event.
- `WS /api/ws/feed` — live transaction stream.
- `GET /api/explain/{tx_id}` — features, 2-hop graph, risk, LLM report.
- `POST /api/feedback` — analyst label; queues a fine-tune.
- `POST /api/feedback/retrain` — apply pending feedback immediately.
- `POST /api/auth/login` — issue access/refresh tokens; returns `428` when MFA is required.
- `POST /api/auth/refresh` — rotate access and refresh tokens.
- `POST /api/auth/mfa/setup`, `POST /api/auth/mfa/enable` — TOTP enrollment.
- `GET /api/auth/me`, `POST /api/auth/logout` — session management.
- `GET /api/banking/overview` — banking KPIs including SLA breaches.
- `GET|POST /api/banking/accounts`, `GET /api/banking/accounts/{id}/statement` — accounts, admin creation, and running-balance statements.
- `GET|POST /api/banking/transactions` — search/paginate ledger and create model-scored, screened, idempotent transactions.
- `POST /api/banking/compliance/screen` — watchlist screening.
- `GET /api/banking/alerts` — alert queue with severity/status filters and transaction detail.
- `POST /api/banking/alerts/{id}/assign`, `POST /api/banking/alerts/{id}/resolve` — single alert workflow.
- `POST /api/banking/alerts/bulk-assign`, `POST /api/banking/alerts/bulk-resolve` — bulk alert workflow.
- `GET /api/banking/cases`, `GET|POST /api/banking/cases/{id}/notes`, `GET|POST /api/banking/cases/{id}/evidence` — case workspace.
- `GET /api/banking/notifications`, `POST /api/banking/notifications/{id}/read` — notification inbox.
- `GET|POST /api/banking/models`, `POST /api/banking/models/{id}/activate`, `POST /api/banking/models/rollback` — model governance.
- `GET|POST /api/banking/users`, `POST /api/banking/users/{username}/password` — admin user management.
- `GET /api/banking/audit`, `GET /api/banking/audit/export`, `POST /api/banking/backup` — audit trail, CSV export, and database backup.

## Configuration

Environment variables are defined in `src/config.py`; see `.env.example` and `frontend/.env.example`. Important ones: `DATA_DIR`, `CHECKPOINT_DIR`, `MODEL_PATH`, `API_DEVICE`, `USE_NEO4J`, `NEO4J_URI`, `NEO4J_USER`, `NEO4J_PASSWORD`, `REDIS_URL`, `LLM_URL`, `LLM_MODEL`, `LLM_ENABLED`, `HIDDEN_DIM`, `ATTENTION_HEADS`, `BANKING_DB_PATH`, `BANKING_DB_URL`, `BANKING_BACKUP_DIR`, `MFA_ISSUER`, `LOGIN_RATE_LIMIT_ATTEMPTS`, `LOGIN_RATE_LIMIT_WINDOW`, `CORS_ORIGINS`, `VITE_API_URL`.

## Testing

```bash
python -m pytest -q
cd frontend && npm run lint && npm run build
```

CI runs the same checks on Python 3.11 and Node 22.

## Known limitations

- The feed simulates live validation from the Elliptic dataset; it does not connect to Bitcoin mainnet.
- Active fine-tuning applies a few low-learning-rate steps to feedback labels and version-checkpoints the model; it is not a full online-training service.
- The full PyTorch graph is still loaded in memory for model inference; Neo4j currently supplies graph queries and storage rather than removing the model's graph dependency.
- GNNExplainer runs on CPU to avoid GPU autograd memory spikes.
- MFA uses TOTP secrets in the application database; production should use SSO/WebAuthn and a secrets manager.
- Watchlist screening uses a small local demo list; production needs a sanctions/PEP provider and false-positive workflow.
- Audit CSV export is append-only application data, not cryptographically immutable WORM storage.
