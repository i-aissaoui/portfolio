import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

json_match = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', content, re.DOTALL)
if json_match:
    print("Found NEXT_DATA script! Length:", len(json_match.group(1)))
else:
    print("No NEXT_DATA script found.")
    
# check for other scripts
scripts = re.findall(r'<script.*?</script>', content, re.DOTALL)
print("Total scripts found:", len(scripts))
for s in scripts:
    if len(s) > 1000:
        print("Large script found, length:", len(s))
