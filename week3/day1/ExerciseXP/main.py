# #exercise1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
        
# cat1=Cat('flufy',2)
# cat2=Cat('snow',3)
# cat3=Cat('nuts',4)
   
# cats_list = [cat1, cat2, cat3]

# def oldest_cat():
#     max_age=max(cat.age for cat in cats_list)
#     oldest_cats = [cat for cat in cats_list if cat.age == max_age]
#     for cat in oldest_cats:
#         print(f'oldest cat is {cat.name}')
    
# oldest_cat()

# #exercise2
# class Dog:
#     def __init__(self,name,height):
#         self.name=name
#         self.height=height
#         print("name: " + name + "; height: " + height ) 
#     def bark(self):
#         print(f'{self.name} goes woof!')
#     def jump(self):
#         print(f'{self.name} jump {int(self.height)*2}cm hight!' )

# David_dog=Dog("Rex","50") 
# David_dog.bark()
# David_dog.jump()

# Sarah_dog=Dog("Teacup","20")
# Sarah_dog.bark()
# Sarah_dog.jump()

# if Sarah_dog.height>David_dog.height:
#     print(f'Sarah\'s dog is bigger')
# elif Sarah_dog.height<David_dog.height:
#     print(f'David\'s dog is bigger')
# elif Sarah_dog.height==David_dog.height:
#     print(f'They\' the same height')

# #exercise3
# class Song:
#     def __init__(self,lyrics):
#         self.lyrics=lyrics
#     def sing_me_a_song(self):
#         print('\n'.join(self.lyrics))

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()

#exercise4
class Zoo:
    def __init__(self,zoo_name):
        self.name=zoo_name
        self.animals=[]
    def add_animal(self,*new_animals):
            if new_animals!= self.animals:
                self.animals.extend(new_animals)
    def get_animal(self):
        print(self.animals)
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        print(self.animals)
    def sort_animal(self):
        sorted_animal={}
        for animal in self.animals:
            first_letter=animal[0]
            if first_letter in sorted_animal:
                sorted_animal[first_letter].append(animal)
            else:
                sorted_animal[first_letter] = [animal]
        return sorted_animal
    def get_group(self):
        sorted_animals = self.sort_animal()
        print(sorted_animals)
        
  
ramat_gan_safari=Zoo("my zoo")
ramat_gan_safari.add_animal("lion","crocodile","bear","dog","cat","elephant")
ramat_gan_safari.get_animal()
ramat_gan_safari.sell_animal("cat")
ramat_gan_safari.sort_animal()
ramat_gan_safari.get_group()
