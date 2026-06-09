import os
import json
import shutil
import re
import html
import requests
from bs4 import BeautifulSoup
import markdownify

html_file = "/home/ismail/Desktop/portfolio/digital_twin_phd/offers.html"
base_dir = "/home/ismail/Desktop/portfolio/digital_twin_phd"
base_url = "https://edtlab.fr"

resume_path = "/home/ismail/Desktop/portfolio/cv/resume_en.pdf"
transcripts = [
    "/home/ismail/Desktop/portfolio/phd/Releve de notes 3.pdf",
    "/home/ismail/Desktop/portfolio/phd/relevé de notes 4.pdf"
]

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

soup = BeautifulSoup(content, 'html.parser')
offers = soup.find_all('a', class_='job-offer-item')

print(f"Found {len(offers)} offers. Starting web scrape...")

count = 0
for offer in offers:
    href = offer.get('href')
    data_text = html.unescape(offer.get('data-search-text', ''))
    
    parsed_data = None
    for i in range(len(data_text), 0, -1):
        if data_text[i-1] == '}':
            try:
                parsed_data = json.loads(data_text[:i])
                break
            except ValueError:
                continue
                
    if not parsed_data:
        continue
        
    count += 1
    raw_title = parsed_data.get("title", f"Offer_{count}").strip()
    pc_tags = parsed_data.get("tags", ["Unknown"])
    pc_tag = pc_tags[0].upper() if pc_tags else "UNKNOWN"
    
    # Create the complete full title folder name
    full_clean_title = re.sub(r'[^\w\s-]', '_', raw_title)
    full_clean_title = re.sub(r'[-\s_]+', '_', full_clean_title).strip('_')
    
    # Numbered folder name: e.g. 01_PC4_...
    folder_name = f"{count:02d}_{pc_tag}_{full_clean_title}"
    folder_path = os.path.join(base_dir, folder_name)
    os.makedirs(folder_path, exist_ok=True)
    
    # 1. Scrape the full html page
    offer_url = base_url + href
    print(f"Scraping: {offer_url} -> {folder_name}")
    try:
        response = requests.get(offer_url, timeout=10)
        page_html = response.text
        
        page_soup = BeautifulSoup(page_html, 'html.parser')
        main_content = page_soup.find('main') or page_soup.find('article') or page_soup.find('body')
        
        if main_content:
            markdown_content = markdownify.markdownify(str(main_content), heading_style="ATX")
        else:
            markdown_content = markdownify.markdownify(page_html, heading_style="ATX")
            
    except Exception as e:
        print(f"Failed to scrape {offer_url}: {e}")
        markdown_content = f"Failed to scrape {offer_url}. Error: {e}"

    # Write the full scraped page
    with open(os.path.join(folder_path, "full_page.md"), "w", encoding="utf-8") as f:
        f.write(markdown_content)

    # 2. Copy required files (Resume and Transcripts) so they are ready
    if os.path.exists(resume_path):
        shutil.copy(resume_path, os.path.join(folder_path, "resume_en.pdf"))
    for t in transcripts:
        if os.path.exists(t):
            shutil.copy(t, os.path.join(folder_path, os.path.basename(t)))

print(f"Done. Processed and created {count} numbered folders.")
