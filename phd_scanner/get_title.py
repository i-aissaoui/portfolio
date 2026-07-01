import re
with open('phd_offer_page_exanple.html', 'r', encoding='utf-8') as f:
    text = f.read()
title = re.search(r'<title>(.*?)</title>', text)
if title:
    print(title.group(1))
h1 = re.search(r'<h1[^>]*>(.*?)</h1>', text)
if h1:
    print(h1.group(1))
