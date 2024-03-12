# #exercise3
from main import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        self.name=name
        self.age=age
        self.weight=weight
        self.trained=trained
    def train(self):
        print(self.bark())
        self.trained=True
    def play(self, *args):
        dog_names = ", ".join(dog.name for dog in args)
        print(f"{dog_names} all play together")
    def do_a_trick(self):
            if self.trained==True:
                sentence = random.choice(sentence_list).format(dog_name=self.name)
                print(sentence)
            else:
                print(f"{self.name} is not trained to do tricks.")
 

sentence_list=["{dog_name} does a barrel roll",'{dog_name} stands on his back legs','{dog_name} shakes your hand','{dog_name} plays dead']
ted=PetDog("ted",10,20)
ted=PetDog("ted",10,20)
rex=PetDog("rex",12,36)
gizmo=Dog("gizmo",15,100)
print(ted.bark())
ted.play(rex,gizmo,ted)
ted.train()
ted.do_a_trick()




