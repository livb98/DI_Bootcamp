#exercise2
class MyClass:
    def __init__(self, x):
        self.x = x

    def __add__(self, other):
        result= self.x + other.x
        return result

obj1 = MyClass(5)
obj2 = MyClass(10)

print(obj1 + obj2)  
