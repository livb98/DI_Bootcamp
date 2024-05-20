"use strict";
// exercise1
const mapType = (value) => {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (typeof value === 'number') {
        return value * value;
    }
};
// exercise2
let objEx2 = {
    a: 'a',
    b: 'b',
    c: 'c'
};
const getProperty = (obj, key) => {
    return obj[key];
};
// exercise3
let objEx3 = {
    1: 1,
    2: 2,
    3: 3
};
const multiplyProperty = (obj, key) => {
    return obj[key] * 2;
};
