#challenge1
list_word = input("Enter a comma-separated sequence of words: ")
def word(list_word):
    words = [word.strip() for word in list_word.split(',')]
    sorted_words = sorted(words)
    sorted_string = ','.join([word for word in sorted_words])
    return sorted_string

sorted_sequence = word(list_word)
print("Sorted sequence of words:", sorted_sequence)

#challenge2
sentence=input('write a sentence: ')
def find_longest_word(sentence):
    words = sentence.split()
    longest_word = ''
    longest_length = 0

    for word in words:
        word_length = len(word)

        if word_length > longest_length:
            longest_word = word
            longest_length = word_length
    print("Longest word in the sentence:", longest_word)
    return longest_word

find_longest_word(sentence)