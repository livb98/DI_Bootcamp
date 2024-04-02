// exercise1
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude( -123.1207)

// exercise2
function displayStudentInfo(objUser){
    const obj = {
        first: 'Elie',
        last: 'Shoppik'
    }
    const {first,last} = objUser
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// exercise3
const users = { user1: 18273, user2: 92833, user3: 90315 }

const userEntrie = Object.entries(users)

function multipling(){
    for (let key of userEntrie){
        key[1] = (key[1]*2);
    }
}

multipling()
console.log(userEntrie);

// exercise4
// objet

// exercise5
// 3

// exercise6
// [2] === [2] 
// {} === {}

// object1: 4
// object2: 4
// object3: 4
// object4: 5
class Animal{
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }
}

class Mamal extends Animal{
    constructor(name,type,color) {
        super (name,type,color)
    }

    sound(aSound){
        this.aSound = aSound
        return `${this.aSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    }
}

let animal1 = new Mamal('bob','dog','black')
console.log(animal1.sound('wouf'));

let farmerCow = {
    name: 'Lily',
    type: 'cow',
    color: 'brown and white',
    mooInfo: animal1.sound('Mooo')

}
console.log(farmerCow);


