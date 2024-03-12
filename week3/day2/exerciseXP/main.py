#exercise1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


cat1 = Bengal("fluffy", 2)
cat2 = Chartreux('snow', 4)
cat3 = Siamese('teddy', 1)

all_cats = [cat1, cat2, cat3]

Sarah_pet = Pets(all_cats)
Sarah_pet.walk()

#exercise2
class Dog:
    def __init__(self,name, age, weight):
        self.name=name
        self.age=age
        self.weight=weight
    def bark(self):
        return f'{self.name} is barking'
    def run_speed(self):
        return (self.weight / self.age) * 10
    def fight(self,other_dog):
        dog_score=self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight
        if dog_score>other_score:
            print(f'{self.name} is the winner')
        elif dog_score<other_score:
            print(f'{other_dog.name} is the looser')
        else:
            print(f'it\'s a tie')


ted=Dog("ted",10,20)
rex=Dog("rex",12,36)
gizmo=Dog("gizmo",15,100)
rex.fight(ted)
rex.fight(gizmo)
gizmo.fight(ted)

#exercise4
class Family:
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name
    def born(self, **child):
        self.members.append(child)
        print(f'congrat')
    def is_18 (self,name):
        for member in self.members:
            if member['name'] == name:
                if  member["age"]>=18:
                    return True
                else:
                    return False
    def family_presentation(self):
        print(f'{self.last_name}\'s family: ')
        print(self.members)
    def add_member(self,name,age,gender,is_child):
        member={"name": name, "age":age, "gender":gender, "is_child":is_child}
        self.members.append(member)
        if member['age']<17:
            member['is_child']=False
        else:
            member['is_child']=True        


# exercise5
class TheIncredible(Family):
    def __init__(self,last_name):
        self.members= []
        self.last_name = last_name
    def use_power(self,name):
        for member in self.members:
            if member['name'] == name:
                try:
                    member["age"]>18
                    print(f"{member['name']} can use power: {member['power']}")
                except:
                    print('not old enought yet')
    def incredible_presentation(self):
        super().family_presentation()
        print(f'Here is our powerful family!')
    def add_member(self,name,age,gender,is_child,power,incredible_name):
        member={"name": name, "age":age, "gender":gender, "is_child":is_child, 'power':power,'incredible_name':incredible_name}
        self.members.append(member)
        if member['age']<17:
            member['is_child']=False
        else:
            member['is_child']=True       

Incredible=TheIncredible("Incredible")


Incredible.add_member("Michael",35,"male",False,'fly','MikeFly')
Incredible.add_member("Sarah", 32, "femal", False,'read minds','SuperWoman')
Incredible.incredible_presentation()
Incredible.born(name="Baby Jack", age=0, gender="male", is_child=True, power="Unknown Power", incredible_name="Baby Jack")
Incredible.incredible_presentation()
