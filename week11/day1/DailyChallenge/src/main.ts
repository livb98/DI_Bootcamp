let num: number | string | boolean

const processInput = (input:  number | string | boolean) => {
    if (typeof input === 'string' ) {
        return input.toUpperCase()
    } else if (typeof input === 'number') {
        return input*input
    } else if (typeof input === 'boolean' ) {
        return !input
    } 

}
console.log(processInput(true))