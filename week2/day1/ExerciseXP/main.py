#exercise1
print('Hello world \n'*4)

#exercise2
x=((pow(99,3)*8))
print (x)

#exercise3
print(5 < 3)
#my prediction'false'
print(3 == 3)
#my predicition true
print(3 == "3")
#my prediction 'false'
print("3" > 3)
#type error (my prediction 'false')
print("Hello" == "hello")
#my prediciton false


#exercise4
computer_brand=input('brand:')
print("I have a " +computer_brand+ " computer")

#exercise5
name=input('my name is ')
age=input('my age is ')
shoe_size=input('my shoe size is ')
info=input('my name is ' + name + ' I\'m ' + age + ' years old, and my shoe size is ' + shoe_size )
print(info)

#exercise6
a=input('number a is ')
b=input('number b is ')
if a>b:
   print('Hello World')
 
#exercise7
number=int(input('number: '))
if (number%2) == 0:
 print('this number is even ')
else:
   print('this number is odd')

 #exercise8
name=input('your name is ')
if name=='Livnath':
   print('Hey! We have the same name')
else:
   print('Oh! We have different name')
 
 #exercise9
height_inch=int(input('My height in inch is '))
height_cm=height_inch*2.54
if height_cm>145:
    print('Your are tall enough for the ride')
else:
    print('Your are still not tall enought for the ride')
