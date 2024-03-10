array = ([['7', 'i', 'i'],
        ['T', 's', 'x'],
        ['h', '%', '?'],
        ['i',' ','#'],
        ['s','M',' '],
        ['$','a',' '],
        ['#','t','%'],
        ['^','r','!']])
matrix=list(zip(*array))
message=[]

for row in matrix:
    for element in row:
        if element.isalpha():
            message.append(element)
        else:
            element = element.replace(element, " ")
            message.append(element)
            continue
print(message)

