from menu_manager import MenuManager

# exercise1

def load_manager():
    return MenuManager()

def add_item_to_menu(manager):
    name = input('name of item: ')
    price = float(input('price of the item: '))
    manager.add_item(name, price)
def remove_item_from_menu(manager):
    name = input('item to remove: ')
    manager.remove_item(name)
def show_restaurant_menu(manager):
    print(manager.menu)
def exit(manager):
    print('menu was saved')
    manager.save_to_file
    manager = load_manager()
    

def show_user_menu(manager):
    print('   MENU    ')
    print("(a) Add and item\n(d) Delete an item\n(v) View the menu\n(x) Exit\n-\n-")
    choice = input('user: ')
    if choice is "a":
        add_item_to_menu(manager)
    elif choice=="d":
        remove_item_from_menu(manager)
    elif choice=="v":
        show_restaurant_menu(manager)
    elif choice=="x":
        exit(manager)
    else:
        print('not possible')

manager = load_manager()
show_user_menu(manager)
