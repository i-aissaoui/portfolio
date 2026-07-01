import os, re, urllib.request, json
from concurrent.futures import ThreadPoolExecutor

with open('all_urls.txt', 'r') as f:
    all_urls = [line.strip() for line in f if line.strip()]

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

cards = content.split('class="bg-white rounded-2xl border border-gray-100')[1:]

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def folder_name(idx):
    for d in os.listdir('.'):
        if d.startswith(f"{idx:02d}_") and os.path.isdir(d):
            return d
    return None

matched_urls = []
for i, card in enumerate(cards):
    idx = i + 1
    title_match = re.search(r'<h3[^>]*>(.*?)</h3>', card, re.DOTALL)
    if not title_match: continue
    title = re.sub(r'\s+', ' ', title_match.group(1).strip())
    
    slug = slugify(title)
    words = [w for w in slug.split('-') if len(w) > 2] 
    
    best_url = None
    best_score = 0
    
    for u in all_urls:
        score = sum(1 for w in words if w in u)
        if score > best_score:
            best_score = score
            best_url = u
            
    if best_url and best_score >= len(words) * 0.5:
        matched_urls.append((idx, title, best_url, folder_name(idx)))
    else:
        print(f"[{idx:02d}] Failed to match: {title}")

def fetch_and_save(item):
    idx, title, url, folder = item
    if not folder: return
    try:
        # Extract UUID from URL
        uuid_match = re.search(r'([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})', url)
        if not uuid_match:
            print(f"[{idx:02d}] No UUID found in {url}")
            return
            
        uuid = uuid_match.group(1)
        api_url = f"https://www.phdscanner.com/api/opportunities/{uuid}"
        
        req = urllib.request.Request(api_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
        
        prose_html = data.get('description', '')
        
        # basic clean up of HTML to markdown
        prose = prose_html
        prose = re.sub(r'<h[1-6][^>]*>', r'\n\n### ', prose)
        prose = re.sub(r'</h[1-6]>', r'\n\n', prose)
        prose = re.sub(r'<p[^>]*>', r'\n', prose)
        prose = re.sub(r'</p>', r'\n', prose)
        prose = re.sub(r'<li[^>]*>', r'\n- ', prose)
        prose = re.sub(r'<[^>]+>', '', prose)
        prose = re.sub(r'\n{3,}', '\n\n', prose).strip()
        prose = prose.replace('&amp;', '&').replace('&nbsp;', ' ')
            
        details_path = os.path.join(folder, 'offer_details.md')
        if os.path.exists(details_path):
            with open(details_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # replace the note and summary with full description
            # Since the previous run might have failed and written "Could not parse...", we will replace from '### Full Position' downwards
            if '### Full Position Description' in content:
                content = re.sub(r'### Full Position Description.*$', f"### Full Position Description\n[Original Link]({url})\n\n{prose}\n", content, flags=re.DOTALL)
            else:
                content = re.sub(r'> \*\*Note:\*\*.+$', f"\n### Full Position Description\n[Original Link]({url})\n\n{prose}\n", content, flags=re.DOTALL)
            
            with open(details_path, 'w', encoding='utf-8') as f:
                f.write(content)
        print(f"[{idx:02d}] Success: {folder}")
    except Exception as e:
        print(f"[{idx:02d}] Error fetching {api_url}: {e}")

print(f"Starting API fetch for {len(matched_urls)} URLs...")
with ThreadPoolExecutor(max_workers=10) as executor:
    executor.map(fetch_and_save, matched_urls)

print("Done!")
