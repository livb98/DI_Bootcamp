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
    items_purchase[item] = float(price[1:].replace(',', ''))
    if int(price)<=wallet_money:
        wallet_money-price
        buy.append(item)
    else:
        continue
print(items_purchase)


# price = items_purchase.values()

# total=float(sum(price))
# total=0

# for each_price in items_purchase.items():
#         total=float(sum(price))
# print(total)

# while True:
#    for each_price in items_purchase.items():
#         total+=float(sum(price))
#         if total>wallet_money:
#             break
#         buy.append(item)  
#         if total < 300:
#             break        
#         print(buy)


