class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}
        print(f'{name}\'s farm')

    def add_animal(self, new_animal, quantity=1):
        if new_animal in self.animals:
            self.animals[new_animal] += quantity
        else:
            self.animals.update({new_animal: quantity})
        print(self.animals)
        
    def get_info(self):
        print("E-I-E-I-0!")
    
    def get_animal_types(self):
        animal_type=[]
        animal_type= sorted(list(self.animals.keys()))
        print(animal_type)
        return animal_type
    # def get_short_info(self):
    #     animal_types = self.get_animal_types()
    #     string = ' '.join(str(element) for element in self.get_animal_types)
    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_types_string = ', '.join(animal_types)
        print(f"McDonald’s farm has {animal_types_string}.")
        


Mcdo = Farm('macdo')
Mcdo.add_animal('cow', 5)
Mcdo.add_animal('sheep')
Mcdo.add_animal('sheep')
Mcdo.add_animal('cat', 3)

Mcdo.get_info()
Mcdo.get_animal_types()
Mcdo.get_short_info()