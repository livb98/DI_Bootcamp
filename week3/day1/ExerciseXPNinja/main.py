class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []  
    def call(self,other_phone):
        caller=(f'{self.phone_number} called {other_phone}')
        self.call_history.append(caller)
        print(self.call_history)

phone1 = Phone("1234567890")
phone2 = Phone("0987654321")

phone1.call(phone2)
phone2.call(phone1)

# phone1.show_call_history()
# phone2.show_call_history()
