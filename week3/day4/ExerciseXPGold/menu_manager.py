import json

restaurant_menu={
    "items": [
        {
            "name": "Vegetable soup",
            "price": 30
        },
        {
            "name": "Hamburger",
            "price": 44.9
        },
        {
            "name": "Milkshake",
            "price": 22.5
        },
        {
            "name": "Artichoke",
            "price": 18
        },
        {
            "name": "Beef stew",
            "price": 52.5
        }
    ]
}


json_file = "restaurant_menu.json"

with open(json_file, 'w') as file_obj:
    json.dump(restaurant_menu, file_obj, indent=2)

class MenuManager:
    def __init__(self):
        with open("restaurant_menu.json", 'r') as file:
            self.menu = json.load(file)
    
    def add_item(self, name, price):
        new_item = {"name": name, "price": price}
        self.menu["items"].append(new_item)
        print('item was added successfully')
    
    def remove_item(self,name):
        old_item=name
        for index, item in enumerate(self.menu["items"]):
            if item["name"] == old_item:
                del self.menu["items"][index]
                print("item remove")
                return True
        print("error")
        return False
    
    def save_to_file(self):
        with open("restaurant_menu.json", 'w') as file:
            json.dump(self.menu, file, indent=2)
        print("Menu saved to file.")
         
        


