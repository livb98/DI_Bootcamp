
function validateUnionType(value: any, allowedTypes: string[]): boolean {
    if(typeof value === "string") {
        return true
    } else {
        return false
    }
}

console.log(validateUnionType(12,[]));
console.log(validateUnionType('12',[]));
console.log(validateUnionType(true,[]));

