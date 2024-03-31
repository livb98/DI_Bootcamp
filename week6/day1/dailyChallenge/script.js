let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

groceries.fruits.forEach((fruit) => console.log(fruit));


const cloneGroceries = () => {
    let user = client
    console.log(user);
    let shopping = groceries
    console.log(shopping)

} 
client = "Betty"
groceries.totalPrice = "35$"
groceries.other.paid = false

cloneGroceries()

