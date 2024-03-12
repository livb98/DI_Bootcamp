# #exercise1
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount 
        
#     def __str__(self):
#         if self.amount==1:
#             return f'{self.amount} {self.currency}'
#         else:
#             return f'{self.amount} {self.currency}s'
        
#     def __int__(self):
#         return self.amount
    
#     def __repr__(self):
#         if self.amount==1:
#             return f'{self.amount} {self.currency}'
#         else:
#             return f'{self.amount} {self.currency}s'
        
#     def __add__ (self,other):
#         try:
#             if self.currency==other.currency:
#                 return self.amount + other.amount 
                
#             elif self.currency!=other.currency:
#                 raise TypeError (f' Cannot add between Currency type {self.currency } and {other.currency}')
#         except: 
#             return self.amount + other
                
#     # def __iadd__(self, other):
#     #     self.amount += other
#     #     return self
#     def __iadd__ (self,other):
#         try:
#             if self.currency==other.currency:
#                 self.amount += other.amount 
#                 return self
                
#             elif self.currency!=other.currency:
#                 raise TypeError (f' Cannot add between Currency type {self.currency } and {other.currency}')
#         except: 
#              self.amount += other
#              return self

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# print(int(c1))
# print(repr(c1))
# print(c1 + 5)
# print(c1 + c2)
# print(c1)
# c1+=5
# print(c1)
# c1+=c3
# print(c1)
# print(c1+c2)

#exercise2




    