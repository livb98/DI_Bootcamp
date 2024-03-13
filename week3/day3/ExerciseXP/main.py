import random
import string
from datetime import datetime

#exercise1
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount 
        
    def __str__(self):
        if self.amount==1:
            return f'{self.amount} {self.currency}'
        else:
            return f'{self.amount} {self.currency}s'
        
    def __int__(self):
        return self.amount
    
    def __repr__(self):
        if self.amount==1:
            return f'{self.amount} {self.currency}'
        else:
            return f'{self.amount} {self.currency}s'
        
    def __add__ (self,other):
        try:
            if self.currency==other.currency:
                return self.amount + other.amount 
                
            elif self.currency!=other.currency:
                raise TypeError (f' Cannot add between Currency type {self.currency } and {other.currency}')
        except: 
            return self.amount + other

    def __iadd__ (self,other):
        try:
            if self.currency==other.currency:
                self.amount += other.amount 
                return self
                
            elif self.currency!=other.currency:
                raise TypeError (f' Cannot add between Currency type {self.currency } and {other.currency}')
        except: 
             self.amount += other
             return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1+=5
print(c1)
c1+=c3
print(c1)
print(c1+c2)

#exercise3

def random_string():
        letters = string.ascii_letters
        result_str = ''.join(random.choice(letters) for i in range(5))
        return result_str

print(random_string())

#exercise4
def date():
    x = datetime.now()
    print(x)
date()

#exercise5
def time():
    today=datetime.now()
    next_year = today.year + 1
    end_time = datetime(next_year, 1, 1)
    time_left = end_time - today
    days = time_left.days
    hours, remainder = divmod(time_left.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    print(f"Time left until January 1st of next year: {days} days, {hours} hours, {minutes} minutes, {seconds} seconds.")
    print(f'the 1st of January is in {days} days, {hours} hours, {minutes} minutes, {seconds} seconds.')

time()

#exercise6
def birthday():
    date_of_birth = input('Enter your date of birth (DD-MM-YYYY): ')
    date_of_birth = datetime.strptime(date_of_birth, '%d-%m-%Y').date()
    current_date = datetime.now().date()
    minutes_diff = (current_date- date_of_birth).total_seconds() / 60.0
    print(minutes_diff)
birthday()

#exercise7
users=[]
def add_user(users, name, address, language_code):
    new_user = {'name': name, 'address': address, 'language_code': language_code}
    users.append(new_user)
    print(users)

add_user(users, 'John', '123 Main St', 'en')

