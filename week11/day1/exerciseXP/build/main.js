"use strict";
// exercise1
let msg = 'Hello World';
console.log(msg);
// exercise2
let age = 2;
let nameVar = 'Dan';
console.log(age, nameVar);
// exercise3
let id;
// exercise4
const funct = (a) => {
    if (a > 0) {
        return 'a is positive';
    }
    if (a < 0) {
        return 'a is negative';
    }
    else {
        return 'a is equal to 0';
    }
};
// exercise5
const add = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'string') {
        return a + b;
    }
};
console.log(add(3, '2'));
// exercise6
const getDetails = (nameInput, ageInput) => {
    let tuple = [nameInput, ageInput];
    return tuple;
};
console.log(getDetails('Dan', 23));
let person = {
    name: 'John',
    age: 34
};
const createPerson = (obj) => {
    return obj;
};
console.log(createPerson(person));
// exercise9
const getAction = (user) => {
    switch (user) {
        case 'John':
            console.log(createPerson(person));
            break;
        case 'Dan':
            console.log(getDetails('Dan', 23));
            break;
        case 'IDK':
            console.log(`i didn't get what was a complex statement so i just put stuff`);
            break;
        default:
            console.log(`${user} is wrong`);
            break;
    }
};
getAction('IDK');
