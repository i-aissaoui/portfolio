# PhD Position F/M Defending deployed AI models: manipulation as a countermeasure

**University:** Inria
**Location:** Paris, France
**Deadline:** Sep 30, 2026

### Contact
- Email: erwan.le-merrer@inria.fr

### Summary
PhD position focusing on AI security,
            examining audit manipulation for defense strategies. Requires strong math and Python skills for algorithm
            development and experimentation.


### Full Position Description

[Original Link](https://www.phdscanner.com/opportunities/phd-vacancies-inria-france-phd-position-fm-defending-deployed-ai-models-manipulation-as-a-countermeasure-d30ac4d5-0737-4ab0-872d-f0f1760a7e38)

Download job offer in PDF format 

Contract type : 
	        	Fixed-term contract

Level of qualifications required : 
	        	Graduate degree or equivalent

Fonction : 
	        	PhD Position

### About the research centre or Inria department

The Inria center at the University of Rennes is one of eight Inria centers and has more than thirty research teams. The Inria center is a major and recognized player in the field of digital sciences. It is at the heart of a rich ecosystem of R&D and innovation, including highly innovative SMEs, large industrial groups, competitiveness clusters, research and higher education institutions, centers of excellence, and technological research institutes.

### Context

Deployed AI models on platforms are interesting to at least two different kinds of crowds:users and attackers. In the first case, it becomes clearer and clearer that the impact of thesemodels on users&#39; everyday life must be audited for preventing abuse or bias [LMPT24]. In thesecond case, the cost of training these models calls for proper defenses against malicious entitiesand oensive competitors [MGW+25]. The ambition of the Cluster SequoIA&#39;s FANG chair isto bridge the gap between these two critical setups: legal auditing and oensive security, inthe domain of modern deployed AI models. From this unique standpoint, and from the bodyof work we have contributed to build in the field of AI auditing (e.g., [BGDV+25, GLMT+24,GLMP+25, Ric26]), we expect to find new insights for attacking and defending deployed AImodels, by finding novel angles.A key observation from this body of work is that platforms hosting AI models are not passiveactors. We have shown that platforms are incentivized to maintain the utility of their modeldespite regulation, and may actively manipulate audit outcomes to their advantage [GLMT+24].Indeed, audit manipulationwhere a platform returns strategically altered responses to an audi-tor&#39;s queriescan severely disrupt the reliability of black-box audits [LMT20]. This manipulativecapability, currently studied as a threat to auditors, constitutes, when viewed from the securitystandpoint, a powerful and largely unexplored defensive tool for model owners facing attackers.This Ph.D. thesis proposes to bring the concepts and techniques of audit manipulation [GLMT+24,Fuk20, Yan22] to the field of AI security, in order to design novel defenses for deployed AI models.

The central insight is the following: when a platform detects an ongoing attack (e.g., modelextraction, adversarial example crafting, or ngerprinting-based reconnaissance [Ric26]), ratherthan simply blocking the attacker (which signals detection and incentivizes the attacker to adapt),a more effective strategy is to manipulate the responses returned to the attacker. By returningstrategically biased results, the platform can degrade the quality of the attacker&#39;s extracted in-formation, poison surrogate models being built by the attacker, or feed misleading signals thatwaste the attacker&#39;s resources. This is conceptually analogous to honeypots and deception-baseddefenses in classical cybersecurity, but instantiated in the specic context of machine learningmodel APIs.A critical challenge arises when the platform cannot reliably distinguish attackers from legit-imate users or regulators. In this regime of uncertain detection, the platform must navigate afundamental tension: manipulated responses, if served to legitimate users, degrade the model&#39;sutility [Kur25]. Randomized defenses [MFL22] oer a principled framework for this setting: byinjecting controlled noise or perturbations into a fraction of responses, the platform can prob-abilistically disrupt attacks while bounding the impact on legitimate users.

We will study how to calibrate such randomized manipulation strategies, drawing on the trade-os between attackdisruption rate and model utility loss.This thesis will leverage the formal understanding of what information dierent attacks ex-tract, and at what query cost, to design defenses that are targeted : manipulating precisely thedimensions of the model&#39;s output that are most valuable to attackers, while preserving the di-mensions that matter for legitimate use and regulatory audits. This cat and mouse (or platformand regulator) defense/audit game might improve our understanding of the limits of what isachievable by both parties in this black-box scenario.

### Assignment

Research questions Can the concepts of audit manipulationwhere platforms return strategically altered re-sponses to auditorsbe transposed to defend models against attackers? What are the formalconditions under which manipulation-based defenses provably degrade an attacker&#39;s informa-tion gain? When a platform cannot reliably distinguish an attacker from a legitimate user, what is theoptimal trade-off between the amplitude of response manipulation and the resulting loss ofmodel utility for legitimate users? Can randomized defenses be designed so that they selectively disrupt attack-relevant dimen-sions of model outputs (e.g., decision boundaries exploited by adversarial attacks for classifiers,or output distributions leveraged for LLMs extraction) while preserving the dimensions relevant for standard use? How does the effectiveness of manipulation-based defenses depend on the type of attackbeing countered? In particular, are extraction attacks, adversarial example crafting, andfingerprinting-based reconnaissance equally vulnerable to response manipulation, or do someattack classes require different defensive strategies fundamentally? On the regulatory side, can manipulation-based defenses coexist with legitimate auditing byregulators? That is, can a platform deploy active defenses against attackers without simultane-ously disrupting the stealthy audits that regulators rely on to assess fairness and compliance?

### Main activities

Envisioned planning t0 + 6 months: Production of a state-of-the-art on manipulation-based defenses for LLMs,covering audit manipulation, adversarial perturbation defenses (e.g., randomized smooth-ing [MFL22] for classiers), and detection-then-response paradigms for LLMs/agents. Formalproblem statement and threat model denition. t0 +12 months: Design and theoretical analysis of manipulation-based defense strategies againstmodel extraction attacks, or other more subtle attacks. t0 +20 months: Extension to multi-attack defense: studying how a single manipulation strategycan simultaneously counter extraction, adversarial, and reconnaissance attacks. Analysis ofthe utilitydefense trade-off under uncertain attacker detection. t0 + 30 months: Study of the coexistence of active defenses and legitimate regulatory audits.Formal characterization of when and how manipulation-based defenses can discriminate be-tween attackers and auditors. t0 + 36 months: Thesis manuscript completed, and planned defense.

### Skills

Solid theoretical background in maths and/or machine-learning

Python coding skills for experimental evaluations

### Benefits package

- Subsidized meals

- Partial reimbursement of public transport costs

- Leave: 7 weeks of annual leave + 10 extra days off due to RTT (statutory reduction in working hours) + possibility of exceptional leave (sick children, moving home, etc.)

- Possibility of teleworking (after 6 months of employment) and flexible organization of working hours

- Professional equipment available (videoconferencing, loan of computer equipment, etc.)

- Social, cultural and sports events and activities

- Access to vocational training

- Social security coverage

### Remuneration

monthly gross salary 2300 euros

### General Information

- Theme/Domain :
											Optimization, machine learning and statistical methods

											Statistics (Big data)
													(BAP E)

- Town/city :
			Rennes

- Inria Center :

					Centre Inria de l&#39;Université de Rennes 

- Starting date :
				2026-10-01

- Duration of contract :
					3 years

- Deadline to apply :
			2026-09-30

			 Warning : you must enter your e-mail address in order to save your application to Inria. Applications must be submitted online on the Inria website. Processing of applications sent from other channels is not guaranteed.

### Instruction to apply

Please submit online : your resume, cover letter and letters of recommendation eventually

				Defence Security : 

				This position is likely to be situated in a restricted area (ZRR), as defined in Decree No. 2011-1425 relating to the protection of national scientific and technical potential (PPST).Authorisation to enter an area is granted by the director of the unit, following a favourable Ministerial decision, as defined in the decree of 3 July 2012 relating to the PPST. An unfavourable Ministerial decision in respect of a position situated in a ZRR would result in the cancellation of the appointment.

				 Recruitment Policy :

				As part of its diversity policy, all Inria positions are accessible to people with disabilities.

### Contacts

- Inria Team :

					ARTISHAU 

PhD Supervisor :

			Le Merrer Erwan
			/
			erwan.le-merrer@inria.fr

### About Inria

									Inria is the French national research institute dedicated to digital science and technology. It employs 2,600 people. Its 200 agile project teams, generally run jointly with academic partners, include more than 3,500 scientists and engineers working to meet the challenges of digital technology, often at the interface with other disciplines. The Institute also employs numerous talents in over forty different professions. 900 research support staff contribute to the preparation and development of scientific and entrepreneurial projects that have a worldwide impact.

                        I create my account

								Register

							I already have an account!

	        	        		 Sign in

                Cancel 

 -->
