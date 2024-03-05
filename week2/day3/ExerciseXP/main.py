#exercise1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

print(dict(zip(keys,values)))

#exercise2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
price=0

for value in family.values():
    if value<3:
        continue
    elif 3<=value<=12:
        price+=10
    elif value>12:
        price+=15
print(price)

family2={}


price2=0

while True:
    name=input('name: ')
    if name== "quit":
        break
    elif name!="quit":
            age=int(input('age: '))
            family2[name]=age
            for value in family2.values():
                if value<3:
                    continue
                elif 3<=value<=12:
                    price2+=10
                elif value>12:
                    price2+=15                   
print(price2)

#exercise3
brand={}
major_color={}
brand['name']='zara'
brand["creation_date"]= '1975'
brand["creator_name"]= "Amancio Ortega Gaona",
brand["type_of_clothes"]=["men", "women", "children", "home "]
brand["international_competitors"]= ["Gap", "H&M", "Benetton"]
brand["number_stores"]= '7000 '
major_color['France']='blue'
major_color['Spain']='red'
major_color['US']='pink, green'
brand.update(major_color)

brand['number_stores']='2'

for key,value in brand.items():
    print(f'{key}  is  {value}')
    
brand['country_creation']='Spain'

print(brand['international_competitors'])
brand['international_competitors'].append("Desigual")

del brand['creation_date']

print(brand['international_competitors'][-1])

print(major_color['US'])

key_lenght=len(brand.keys())
value_lenght=len(brand.values())
print(f'In this dictionary there is {key_lenght} key and {value_lenght} value')

print(brand.keys())

more_on_zara={
            'creation_date': 1975,
            'number_stores': 10000
}
brand.update(more_on_zara)

for key in more_on_zara.keys():
    print(more_on_zara['number_stores'])
#it prints it twice

#exercise4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
numbers=[]
disney_users_A={}
disney_users_B={}
disney_users_C={}

for i in range(5):
    numbers.append(i)

for item in zip(sorted(users), numbers):
    disney_users_A.update({item[0]:item[1]})
print(disney_users_A)

for item in zip(numbers, users):
    disney_users_B.update({item[0]:item[1]})
print(disney_users_B)

for item in zip(sorted(users), numbers):
    disney_users_C.update({item[0]:item[1]})
print(disney_users_C)

new_dict={}
for user,number in disney_users_A.items():
        if "i" in user :
            new_dict.update({user:number})      
print(new_dict)

new_dict2={}
for user,number in disney_users_A.items():
        if "M" in user :
            new_dict2.update({user:number})
        elif "P" in user:
            new_dict2.update({user:number})
        
print(new_dict2)




# ()=tuple, call functions,
#[]=create list, accessing index, accessing keys in dict
#{}=set, dict, wrapping variable in f string