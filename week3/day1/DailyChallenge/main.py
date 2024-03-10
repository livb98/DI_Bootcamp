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
        

Mcdo = Farm('macdo')
Mcdo.add_animal('cow', 5)
Mcdo.add_animal('sheep')
Mcdo.add_animal('sheep')
Mcdo.add_animal('cat', 3)

Mcdo.get_info()
