import bs4
with open('index.html', 'r') as f:
    soup = bs4.BeautifulSoup(f, 'html.parser')
cards = soup.find_all('div', class_=lambda c: c and 'bg-white rounded-2xl border border-gray-100' in c)
for i, card in enumerate(cards[:2]):
    print(f"Card {i}")
    for a in card.find_all('a'):
        print(' a href:', a.get('href'))
