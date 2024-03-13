from collections import Counter
import requests

url = "https://www.gutenberg.org/files/17135/17135-0.txt"
def download_file(url, filename):
    response = requests.get(url)
    with open(filename, 'wb') as f:
        f.write(response.content)
    print(f"File downloaded successfully as {filename}")
download_file(url, "the_stranger.txt")

file_name="the_stranger.txt"

#part1
class Text:
    def __init__(self,text):
        self.text=text
    def frequency(self):
        text_str=self.text.split(" ")
        frequency_word = Counter(text_str)
        for word in frequency_word:
            print('Frequency of', word, 'is:', frequency_word[word])
        return None
    def common_word(self):
        split_text = self.text.split(" ")
        word_counter = Counter(split_text)
        most_common_words = word_counter.most_common(1)
        return most_common_words
    def unique_word(self):
        text_str = self.text.split(" ")
        frequency_word = Counter(text_str)
        unique = []
        for word in frequency_word:
            if frequency_word[word] == 1:
                unique.append(word)
        return f'{unique}\n'
    @classmethod
    def from_file(cls, file_name):
        with open(file_name, 'r') as f:
            text_content = f.read()
        return cls(text_content)
  
        
        
            

test_text=Text('A good book would sometimes cost as much as a good house.')
text=Text.from_file("the_stranger.txt")

print(text.unique_word())





    