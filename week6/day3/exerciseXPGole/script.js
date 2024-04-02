// exercise1
function printFullName(objUser){
    const obj = {
        first: 'Elie',
        last: 'Shoppik'
    }
    const {first,last} = objUser
    return `Your full name is ${first} ${last}`;
}

console.log(printFullName());

// exercise2
let obj = { b: 1, a: 2, c: 3 }
let objK = Object.keys(obj)
let objV = Object.values(obj)
let objE = Object.entries(obj)

let newArr = []
let arrK = []
let arrV = []
function keysAndValue(){
    for (let keys of objK){
        arrK.push(keys)
        arrK.sort()
    };
    for (let value of objV){
        arrV.push(value)
        arrV.sort()
    }
    newArr.push(arrK,arrV)

    return newArr
}

console.log(keysAndValue());

// exercise3
//   3
