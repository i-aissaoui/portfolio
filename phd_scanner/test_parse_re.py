import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all cards
cards = content.split('class="bg-white rounded-2xl border border-gray-100')[1:]
print(f"Found {len(cards)} cards")

for i, card in enumerate(cards[:2]):
    title_match = re.search(r'<h3[^>]*>(.*?)</h3>', card, re.DOTALL)
    title = title_match.group(1).strip() if title_match else "Unknown"
    
    links = re.findall(r'<a[^>]+href="([^"]+)"', card)
    print(f"\nCard {i+1}: {title}")
    print(f"Links: {links}")
