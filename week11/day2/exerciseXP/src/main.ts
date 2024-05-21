// exercise1
// Create a class Person with the following properties:
// In this exercise, a class Person is created with different access modifiers for its properties: private for firstName and lastName, public for age, and protected for address. The constructor initializes these properties, and the method getFullName returns the full name of the person.


class Person  {
    constructor(
        private firstName : string,
        private lastName: string,
        public age: number,
        protected adress: string

    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.adress = adress
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

}

let A = new Person('a', "A", 1, "aa")
console.log(A.getFullName());
