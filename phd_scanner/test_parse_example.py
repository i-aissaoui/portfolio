import re

with open('phd_offer_page_exanple.html', 'r', encoding='utf-8') as f:
    content = f.read()

cards = content.split('class="bg-white rounded-2xl border border-gray-100')[1:]
print(f"Found {len(cards)} cards in example HTML")

for i, card in enumerate(cards[:2]):
    title_match = re.search(r'<h3[^>]*>(.*?)</h3>', card, re.DOTALL)
    title = title_match.group(1).strip() if title_match else "Unknown"
    print(f"Card {i+1}: {title}")
