// exercise1
const mapType = (value: string | number) => {
    if (typeof value === 'string') {
        return value.length
    }
    else if (typeof value === 'number') {
        return value*value
    }
}

// exercise2
let objEx2: object = {
    a: 'a',
    b: 'b',
    c: 'c'
}
const getProperty = (obj: object, key : string) => {
    return obj[key as keyof object]
}

// exercise3
let objEx3: object = {
    1: 1,
    2: 2,
    3: 3
}
const multiplyProperty = (obj: object, key : number) => {
    return obj[key as keyof object]*2

}