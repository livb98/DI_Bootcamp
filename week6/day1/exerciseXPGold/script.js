// // exercise1
// let landscape = () => {

//     let result = "";

//     let flat = (x) => {
//         for(let count = 0; count<x; count++){
//             result = result + "_";
//           }
//           console.log(result);
//         } 
//     let mountain = (x) => {
//         result = result + "/"
//         for(let counter = 0; counter<x; counter++){
//           result = result + "'"
//         }
//         result = result + "\\"
//         console.log(result);
//       }
//     flat(4);
//     mountain(4);
//     flat(4)
//     return result
// }
// console.log(landscape())

// // exercise2
// const addTo = x => y => x + y;
// const addToTen = addTo(10);
// addToTen(3);
// // 13

// // exercise3
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)
// // 31

// // exercise4
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)
// // 17

// // exercise5
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)
// // 16