import json
import requests
import os
from collections import Counter

#exercise1
def download_file(url, save_path):
    os.makedirs(os.path.dirname(save_path), exist_ok=True)
    response = requests.get(url)
    if response.status_code == 200:
        with open(save_path, 'wb') as f:
            f.write(response.content)
        print("File downloaded successfully.")
    else:
        print("Failed to download the file.")
url = "https://norvig.com/ngrams/sowpods.txt"
save_path = "path/to/your/development/directory/sowpods.txt" 
download_file(url, save_path)

dir_path=os.path.dirname(os.path.realpath(__file__))



class AnagramChecker:
    def __init__(self,file_name):
        self.file_name = file_name
        with open (f'{dir_path}/{file_name}','r') as f:
            self.words_list = f.readlines()
            for i, word in enumerate(self.words_list):
                self.words_list[i]=word.strip("\n").lower()
                
                      
    def is_valid_word(self,user_word):

        return user_word in self.words_list
    
    def get_anagrams(self,user_word):
        anagram_list=[]
        for word in self.words_list:
            if len(word) == len(user_word) and sorted(word)==sorted(user_word):
                anagram_list.append(word)
        return anagram_list
    
  

   
        
        
file_name="sowpods.txt"
Ac=AnagramChecker(file_name)         
# print(Ac.get_anagrams("sdfghj"))
print(Ac.get_anagrams("meat"))





