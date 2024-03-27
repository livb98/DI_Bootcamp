// exercise1
const people = ["Greg", "Mary", "Devon", "James"];
// part1
// q1
people.shift()
console.log(people);

// q2
people[2] = 'Jason'
console.log(people);

// q3
people.push("Livnath")
console.log(people);

// q4
console.log(people.indexOf('Mary'));

// q5
let peopleBis = people.slice(1,3)
console.log(peopleBis);

// q6
console.log(people.indexOf('Foo'));
// because "Foo" doesn't exist in the list

// q7
let last  = people.slice(-1)
console.log(last);

// part2
// q1
for (let i=0; i<people.length; i++) {
    console.log(people[i]);
}

// q2
for (let i = 0; i < people.length; i++) {
    if (i == 'Devon') { 
        break;
      }
    console.log(people[i]); 
  }

// exercise2
// q1
let colors = ['blue', 'green', 'red', 'purple', 'yellow']

// q2
for (let i = 0; i < colors.length; i++) {
    console.log('My #' + (i+1) + ' choice ' + colors[i]);
}

// exercise3
// q1
let user = prompt('give me a number: ')
console.log(typeof(user));

// q2
while((user) < 10 ){
    user = (prompt('give me a number: '));
}

// exercise4
// q1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// q2
console.log(building.numberOfFloors);

// q3
console.log('there are ' + building.numberOfAptByFloor.firstFloor + ' appartments in the first floor and ' + building.numberOfAptByFloor.thirdFloor + ' appartments in the thirs floor');

// q4
console.log(building.nameOfTenants[1] + ' is the second tenant and he has ' + building.numberOfRoomsAndRent.dan[0] + ' rooms')

// q5
let sarasAndDavidRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
let danRent = building.numberOfRoomsAndRent.dan[1]
console.log(sarasAndDavidRent);
console.log(danRent);
if (sarasAndDavidRent > danRent) {
    danRent = danRent + 200
}
console.log(danRent);

// exercise5
// q1
let family = {
    dad: "John",
    mom: "Lea",
    sister1: "Ava",
    sister2: "Bar",
    brother1: "Roy"
  };

// q2
for (let i in family) {
    console.log(i);
}

// q3
for (let i in family) {
    console.log(family[i]);
}

// exercise6
// q1
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

for ([key, value] of Object.entries(details)) {
    console.log(` ${key} ${value}`);
}

// exercise7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// q1
let societyName = []
names.sort();
for (let name of names) {
    societyName.push(name.charAt(0))
}
console.log(societyName);

// q2
console.log(societyName.join(''))