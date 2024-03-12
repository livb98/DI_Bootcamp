import math

class Circle:
    def __init__(self, radius=0, diameter=0):
        self.radius=radius 
        self.radius=diameter / 2
        self.diameter = diameter
        self.radius = diameter / 2
        

    def get_radius(self):
        return self.radius

    def get_diameter(self):
        return self.diameter
    
    def set_radius(self, radius):
        self.radius = radius
        self.diameter = 2 * radius

    def set_diameter(self, diameter):
        self.diameter = diameter
        self.radius = diameter / 2
    
    def area(self):
        return math.pi * self.radius**2
    
    def __str__(self):
        return f"R: {self.radius}, D: {self.diameter}"
    
    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)
    
    def __lt__(self, other):
         return self.radius < other.radius
     
    def __eq__(self, other):
        return self.radius==other.radius

circle1 = Circle(2, 3)
circle2 = Circle(1, 8)

print(circle1.get_diameter())  
circle1.set_diameter(5)
print(circle1.get_radius()) 
print(circle1.area())  
print(circle1) 
circle3 = circle1 + circle2
print(circle3.get_radius())  
print(circle1 < circle2)
print(circle1 == circle2)
circle_list = [circle3, circle2, circle1]
circle_list.sort()
print([str(circle) for circle in circle_list])
