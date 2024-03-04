#exercise1
string=input('type any string you want: ')
if len(string)<10:
    print('the string is not long enought')
elif len(string)>10:
   print('the string is too long')
else:
    print('perfect string')

#exercise2
print(string[0])
print(string[-1])

#exercise3
for i in range(len(string)):
    print(string[:i+1])