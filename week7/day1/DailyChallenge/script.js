// DC1
let array = ['at','rts','efrv','erb']

function makeAllCaps(arr) {
    return new Promise((res, rej) => {
        arr.forEach((element, index, arr) => {
            if (typeof element === "string") {
                arr[index] = element.toUpperCase();
            } else {
                rej('not each element is a string');
            }
        });
        res(arr);
    });
}


function sortWords(arr){

    return new Promise((res,rej) => {
        if (arr.length >= 4) {
            res (arr.sort());
         
        }
        else {
            rej('lenght of array different than 4')
        }
})}

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))


makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))



makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) 
      .catch(error => console.log(error))




