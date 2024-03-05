#challenge1
numbers=int(input('number: '))
lengths=int(input('length: '))

multiples = [numbers * i for i in range(1, lengths + 1)]

#challenge2
string = input("string: ").split()
output=[]
output.append(string)
for i in string:
    if i==i*2:
        output.remove([i])
print(output)    