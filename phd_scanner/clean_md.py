import os
import re

def clean_markdown_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split the content into header (before Full Position Description) and body
    if '### Full Position Description' not in content:
        return # Skip if no full description
        
    parts = content.split('### Full Position Description', 1)
    header = parts[0]
    body = parts[1]
    
    # Clean the body
    # 1. Remove HTML comments
    body = re.sub(r'<!--.*?-->', '', body, flags=re.DOTALL)
    # 2. Remove CSS @import or style blocks
    body = re.sub(r'@import url.*?;', '', body)
    body = re.sub(r'<style.*?>.*?</style>', '', body, flags=re.DOTALL)
    body = re.sub(r'<script.*?>.*?</script>', '', body, flags=re.DOTALL)
    # 3. Remove standalone HTML tags
    body = re.sub(r'<[^>]+>', '', body)
    # 4. Remove empty list items
    body = re.sub(r'-\s*\n\s*', '', body)
    # 5. Remove massive whitespace (more than 2 newlines -> 2 newlines)
    body = re.sub(r'\n\s*\n', '\n\n', body)
    # 6. Trim leading/trailing whitespace
    body = body.strip()

    new_content = header + "### Full Position Description\n\n" + body + "\n"
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

folders = [d for d in os.listdir('.') if os.path.isdir(d) and re.match(r'^\d{2}_', d)]
for folder in folders:
    details_path = os.path.join(folder, 'offer_details.md')
    if os.path.exists(details_path):
        clean_markdown_file(details_path)

print(f"Cleaned {len(folders)} markdown files.")
