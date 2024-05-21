"use strict";
function validateUnionType(value, allowedTypes) {
    if (typeof value === "string") {
        return true;
    }
    else {
        return false;
    }
}
console.log(validateUnionType(12, []));
console.log(validateUnionType('12', []));
console.log(validateUnionType(true, []));
