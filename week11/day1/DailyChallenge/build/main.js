"use strict";
let num;
const processInput = (input) => {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else if (typeof input === 'number') {
        return input * input;
    }
    else if (typeof input === 'boolean') {
        return !input;
    }
};
console.log(processInput(true));
