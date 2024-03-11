class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = [] 
        self.message=[] 
    def call(self,other_phone):
        caller=(f'{self.phone_number} called {other_phone}')
        self.call_history.append(caller)
    def show_call_history(self):
        print(self.call_history)
    def send_message(self,other_phone):
        content=input("message: ")
        message={"to": other_phone,
                  "from": self.phone_number,
                  "content": content}
        self.message.append(message)
        print(message)


phone1 = Phone("1234567890")
phone2 = Phone("0987654321")

phone1.call(phone2.phone_number)
phone2.call(phone1.phone_number)

phone1.send_message(phone2.phone_number)

