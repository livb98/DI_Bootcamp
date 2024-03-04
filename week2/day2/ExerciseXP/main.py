#exercise1
my_fav_numbers=set()
my_fav_numbers={1,3,8}
my_fav_numbers.add(4)
my_fav_numbers.add(7)
print(my_fav_numbers)

friend_fav_numbers=set()
friend_fav_numbers={2,5,6}
print(friend_fav_numbers)

our_fav_numbers=my_fav_numbers|friend_fav_numbers
print(our_fav_numbers)

#exercise2
#no

#exercise3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket[-1]="Kiwi"
basket[0]="Apples"
basket.count("Apples")
basket.clear()
print(basket)

#exercise4
#float number are number that are number with decimal interger number are number without decimal
numbers = range(1, 6) 
final_list=[]

for number in numbers:
    final_list.append(number)
    final_list.append(number+0.5)

print(final_list[1:-1])

#exercise5
numbers=range(1,21)
list1=[]
for number in numbers:
    list1.append(number)

print(list1)

index_even=list1[::2]
print(index_even)

#exercise6
name='' 
while name != "Livnath":    
    name=input('what\'s your name? ')

print("Finished")

#exercise7
fruits=input("what is your favorite fruits? separate your response by a single space ")

fruit_list=[]
fruit_list.append(fruits)


while True:
    fruit_name=input('chose any fruit ')
    if fruit_name == fruits:
        print('You chose one of your favorite fruits! Enjoy!')
        break
    else:
        print('You chose a new fruit. I hope you enjoy')
        break
    

print(fruit_list)

#exercise8
while True: 
    topping = input("Please enter topping you would like (enter 'quit'  when you are finished): ")
    if topping == 'quit':
        print("I\'ll add", topping, "to your pizza.")
        break
    else:
        print(topping)
        

print("Goodbye !")

#exercise9
ages=input("age: ").split()
print(ages)
price=0

for age in ages:
    if int(age)<3:
        continue
    elif 3<=int(age)<=12:
        price+=10
    elif int(age)>12:
        price+=15
print("total price is", price)


names=input("name: ").split()
list_age=[]
for name in names:
    age2=input(f'{name} give your age: ')
    list_age.append(age2)

for age2 in list_age:
    if int(age2)<16 or int(age2)>21:
        list_age.remove(age2)
print(list_age)

#exercise10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
item_remove=["Pastrami sandwich"]

while item_remove in sandwich_orders:
    sandwich_orders.remove(item_remove)
print(sandwich_orders)

sandwichs_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
items_to_remove = ["Pastrami sandwich"]

for item in items_to_remove:
    while item in sandwichs_orders:
        sandwichs_orders.remove(item)

print(sandwichs_orders)

finished_sandwiches=[]
for i in sandwichs_orders:  
    finished_sandwiches.append(sandwichs_orders.pop(0))

print(finished_sandwiches)
