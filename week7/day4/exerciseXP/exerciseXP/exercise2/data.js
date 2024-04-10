// exercise2
export let arr = [
    {name: 'a',
    age: 12,
    location: 'aCity'},
    {name: 'b',
    age: 25,
    location: 'bCity'},
    {name: 'c',
    age: 34,
    location: 'cCity'},
]


export function avgAge(){
    let totAge = 0
    let numPers = 0
    let evAge = arr.map(obj => obj.age)
    for (let age of evAge ){
        totAge += age        
    }
    for (let pers in arr) {
        numPers =+ Number(pers)+1}

    let avgAge = totAge/numPers
        return avgAge
}