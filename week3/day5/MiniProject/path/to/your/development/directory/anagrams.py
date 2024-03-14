import anagram_checker
from anagram_checker import AnagramChecker
import os
import requests



def load():
    return AnagramChecker("sowpods.txt")


def menu(checker):
    while True:
        print("MENU")
        print("(i)input a word\n(x)exit")
        i=str(input("choice: "))
        if i=="i":
            word=input("word: ")
            user_word=word.strip()
            if user_word.isalpha():
                checker.is_valid_word(user_word)
                print(f'your word is: {user_word}')
                print(f'this is a valid english word')
                print(f'anagram for your word are: {checker.get_anagrams(user_word)}')
            elif len(user_word.split()) > 1:
                raise Exception("Input must be a single word")
            else:
                print("not letters, try again\n")
        elif i=="x" :
            print("exit")
            break
        else:
            return False


checker=load()
menu(checker)
