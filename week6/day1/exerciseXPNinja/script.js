function test(a) {
    return function(b) {
        if (b === undefined){
            return a

        } else {
            return test(a + ' ' + b)
        }
        
    };
}

console.log(test("word")("here")("thanks")())
