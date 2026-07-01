import os
import re
import glob

folders = sorted(glob.glob('[0-9][0-9]_*/'))

print("| Folder | Contact Name | Email Address |")
print("|---|---|---|")

for folder in folders:
    details_path = os.path.join(folder, 'offer_details.md')
    if not os.path.exists(details_path):
        continue
    with open(details_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple heuristic: if there's an email in the Contact section, or if "apply" and "@" are close by
    email_match = re.search(r'Email:\s*([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)', content, re.IGNORECASE)
    
    if email_match:
        email = email_match.group(1)
        name_match = re.search(r'(Dr\.|Prof\.|Ass\.|Mr\.|Ms\.)[^\n]+', content)
        name = name_match.group(0).strip() if name_match else "Hiring Committee"
        print(f"| {folder.rstrip('/')} | {name} | {email} |")

