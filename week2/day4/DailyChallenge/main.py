
array = [['7', 'i', 'i'],
        ['T', 's', 'x'],
        ['h', '%', '?'],
        ['i',' ','#'],
        ['s','M',' '],
        ['$','a',' '],
        ['#','t','%'],
        ['^','r','!']]

   
rows, cols = (5, 5)
array2=[[]]
# message=[]


# for element in range(len(array)):
#     array2.append(array[element][::-1])
 
    
print(array)

def matrix():
    global array
    for row in range(len(array)):
        for element in range(len(row[0])):
            array2[element][row]=array[row][element]
        print(array2)
            

 
matrix()
    
    
    
# for row in array:
#     for element in row:
#         if element.isalpha():
#             message.append(element)
#         else:
#             continue
        # print(message)



# print(array2)

# def matrix():
#     global array2
#     for row in array2:
#         for element in row:
#             if element.isalpha():
#                 message.append(element)
#                 print(message)
            # else:
            #  continue
            # if element.isdigit():
            #     element.replace(element,' ')
            # print(message)
                
# matrix()