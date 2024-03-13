import requests
import os
import random
import json

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

file_name="sowpods.txt"
collection=[]
def get_words_from_file(file_name):
    with open(file_name,"r") as f:
        lines=f.readlines()
        
        for line in lines:
            words = line.split()
            collection.extend(words)



def get_random_sentence(length):
    words = get_words_from_file("path/to/your/development/directory/sowpods.txt")
    random.shuffle(collection)
    random_sentence=' '.join(collection[:length])
    print(random_sentence.lower())

def main():
    print(f' this program take a list of word and create sentences that has no sense')
    length=int(input('How long do you want your sentence to be? '))
    if 2<=length<=20:
       return get_random_sentence(length)
    else:
        print (f'error, lenght not valid')
        
main()

# exercise2
sampleJson = { 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}

print(sampleJson["company"]["employee"]["payable"]["salary"])
sampleJson["company"]["employee"]['new_key']=['new_value']
print(sampleJson)
json_file = "JSON"

with open(json_file, 'w') as file_obj:
    json.dump(sampleJson, file_obj, indent = 2, sort_keys=True)
