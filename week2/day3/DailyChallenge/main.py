#challenge1
word = input('word: ')
letter_indexes = {}


for index, letter in enumerate(word):
    if letter in letter_indexes:
        letter_indexes[letter].append(index)
    else:
        letter_indexes[letter] = [index]

print(letter_indexes)

#challenge2
items_purchase = {
                    "Water": "$1",
                    "Bread": "$3",
                    "TV": "$1,000",
                    "Fertilizer": "$20"
}
dict={}
buy=[]
wallet = "$300"
wallet_money = float(wallet.replace("$", "")) 
print(wallet_money)
for item, price in items_purchase.items():
    items_purchase[item] = price[1:]
print(items_purchase)

price = items_purchase.values()
total=float(sum(price))
while total<=wallet_money:
    buy.append(items_purchase)
    break
print(items_purchase)

total=0
for i in items_purchase.values():
        total += i




