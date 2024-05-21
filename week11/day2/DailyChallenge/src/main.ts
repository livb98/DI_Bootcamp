function validateUnionType(value: any, allowedTypes: string[]): boolean {
    for (let i = 0; i < allowedTypes.length; i++) {       
        if (typeof value === allowedTypes[i]) {
            return true;
        }
    }
    return false;
}

console.log(validateUnionType(12123456789765432,["string","number"]));


