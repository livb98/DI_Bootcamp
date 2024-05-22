"use strict";
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
        this.numberOfDoors = numberOfDoors;
        this.make = make;
        this.model = model;
    }
    start() {
        return `${this.model},${this.make},${this.numberOfDoors}`;
    }
}
let newCar = new Sedan('a', 'a', 12);
let D = {
    name: "dan",
    age: 23
};
function combineObjects(obj3) {
    return obj3;
}
// exercise4
class Stack {
    constructor() {
        this.elements = [];
    }
    push(element) {
        this.elements.push(element);
    }
    pop() {
        return this.elements.pop();
    }
    isEmpty() {
        if (this.elements.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
const numberStack = new Stack();
// exercise5
const isGreaterThanTen = (num) => {
    return num > 10 ? true : false;
};
const filterArray = (arrelement, predicate) => {
    const result = [];
    for (const item in arrelement) {
        if (predicate(arrelement[item])) {
            result.push(arrelement[item]);
        }
    }
    return result;
};
