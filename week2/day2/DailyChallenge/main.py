#challenge1
numbers=int(input('number: '))
lengths=int(input('length: '))

multiples = [numbers * i for i in range(1, lengths + 1)]

print(multiples)  

#challenge2

string = input("string: ")
output=""
for i in string:
    output = output + i*2
print(output)    