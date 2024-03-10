class phone:
    def __init__(self,phone_number,call_history):
        self.phone_number=phone_number
        call_history=[]
    def call(self,other_phone):
        self.other_phone=other_phone
        caller=input("caller: ")
        call_history