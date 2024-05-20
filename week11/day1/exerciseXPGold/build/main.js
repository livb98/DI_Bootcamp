"use strict";
// exercise1
const formatValue = (param) => {
    if (typeof param === 'number') {
        return `${param}`;
    }
    else if (typeof param === 'string') {
        return param.toUpperCase();
    }
};
// exercise2
let arr = [1, 2, 3, 4];
const sumNumbers = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};
const introduceUser = (obj) => {
    return `Hello ${obj.name}, you are ${obj.age} year old`;
};
// exercise4
const greetUser = (name, greeting) => {
    if (greeting === undefined) {
        return `Hello ${name}, how are you?`;
    }
    return `${greeting} ${name}`;
};
// exercise5
const calculate = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
};
