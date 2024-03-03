#exercise1
print('Hello world\n'*4)
print('I love python\n'*4)

#exercise2
while True:
    month=int(input('choose a month (in number so january:1; february:2...)'))
    if month>=3 and month<=5:
        print('winter')
        break
    elif month>=6 and month<=8:
        print('summer')
        break
    elif month>=9 and month<=11:
        print('autumn')
        break
    elif month<=2 or month==12:
        print('spring')
        break
    else:
        print('try again')    