import random
#exercise1
# def display_message():
#     print('hi i\'m learning at developer institue' )
# display_message()

#exercise2
# title=input("what book is your favorite?: ")
# def favorite_book(title):
#     print(f'One of my favorite books is  {title}')

# favorite_book(title)

#exercise3
# def describe_city(city,country='israel'):
#     print(f'this {city} is in {country}')
# describe_city('te aviv')

#exercise4

# g_numbers = random.randint(1, 100)
# def game(my_numbers,g_numbers):
#     if my_numbers==g_numbers:
#         print('congrat!')
#     else:
#         print('you failed')
   
# game(35,g_numbers)

#exercise5
# def make_shirt(size="L",text="I love Python"):
#     print(f'The size of the shirt is {size} and the text is {text}')

# make_shirt()
# make_shirt(size='M')
# make_shirt('any size','any message')

#exercise6
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(magician_names):
#     for i in magician_names:
#         print(f'{i}')
# show_magicians(magician_names)

# def make_great(magician_names):
#     for i in magician_names:
#         print(f'The Great {i}')
# make_great(magician_names)

#exercise7
# season=input('season: ')

# def get_random_temp(season):
#     if season == 'winter':
#         temp=random.randint(-10,16)
#     elif season == 'fall':
#         temp=random.randint(16,23)
#     elif season == 'spring':
#         temp=random.randint(23,32)
#     elif season == 'summer':
#         temp=random.randint(32,40)
#     return temp

# def main():
#     temp = get_random_temp(season)
#     print(f'The temperature right now is {temp} degrees Celsius.')
#     if temp<0:
#         print(f'it\'s really cold')
#     elif 0<temp<=16:
#         print(f'it\'s cold')
#     elif 16<temp<=23:
#         print(f'it\'s fine')
#     elif 23<temp<=32:
#         print(f'it\'s getting hot')
#     elif 32<temp<=40:
#         print(f'it\'s too hot')
# main()

#exercise8
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
def quizz():
    data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
    wrong_answer=[]
    right=0
    wrong=0
    for item in data:
        question = item["question"]
        answer = item["answer"]
        user_answer = input(question).strip()
        if user_answer != answer:
            wrong_answer.append(question)
            wrong+=1
        else:
            right+=1
            continue
    print(f'right answer: {right} and wrong aswers: {wrong}')
quizz()