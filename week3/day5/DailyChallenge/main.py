#exercise1
# 1.What is a class?
# 1.it's a data type we use to contain data and to use method to manipulate the data it-self and create object

# 2.What is an instance?
# 2.the new object created in the class

# 3.What is encapsulation?
# 3.the use of underscore to prevent the use of private or protected variable

# 4.What is abstraction?
# 4.process to show only the essential information to the user and hide the more complex one

# 5.What is inheritance?
# 5.the use of a class build inside another class

# 6.What is multiple inheritance?
# 6.inheritance but from multiple class, in other word a class build inside multiple other classes

# 7.What is polymorphism?
# 7.it's when functions from different class use the same name 

# 8.What is method resolution order or MRO?
# 8.where there is an inheritence this method come searching for the first class it's gonna use in a certain order (from top to bottom)


import random

#exercise2
# class Cart:
#     suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
#     value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
       
# class Deck:
    
#     def __init__(self,cards):
#         self.cards=cards
#         for i in range (0, len(Cart.value)):
#             for j in range (0, len(Cart.suits)):
#                 cards=Cart.value[i] + Cart.suits[j]
#                 cards_deck.append(cards+' ')  
 
#     def shuffle(self):
#         random.shuffle(cards_deck)
    
#     def deal(self):
#         for card in cards_deck:
#             while True:
#                 if len(cards_deck)!=0:
#                     cards_deck.remove(card)
#                     card_remove.append(card)
#                     print(card_remove)
#         return cards_deck
#         # else:
#         #     return card_remove

      
# cards_deck=[]
# cards_deck==52 
# card_remove=[]
# p=Deck(cards_deck)
# p.shuffle()
# p.deal()
# print(len(cards_deck))



class Cart:
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
       
class Deck:
    
    def __init__(self,cards):
        self.cards=cards
        cards_deck=[]
        # self.card_deck=[]
        for i in range (0, len(Cart.value)):
            for j in range (0, len(Cart.suits)):
                self.cards=Cart.value[i] + Cart.suits[j]
                return cards_deck.append(self.cards)
        # print(cards_deck)
        # return cards_deck
        
                  
 
    def shuffle(self):
        print(random.shuffle(self.cards_deck))
    
    def deal(self):
        for card in self.card_deck:
            while True:
                if len(self.card_deck)!=0:
                    self.card_deck.remove(card)
                    card_remove.append(card)
                    # print(card_remove)
        return self.card_deck
        # else:
        #     return card_remove

      

# cards_deck==52 
card_remove=[]
p=Deck()

# print(p)
# p.shuffle()
# print(p.deal())
# print(len(cards_deck))

