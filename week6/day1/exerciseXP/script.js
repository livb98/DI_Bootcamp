// exercise1
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
// #1.1 
// `inside the funcOne function 3`
// #1.2
// `inside the funcOne function 5`

//#2
// let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
// `inside the funcThree function 0`
// `inside the funcThree function 5`
// #2.2
// `inside the funcThree function 0`

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
// `inside the funcFive function hello`

//#4
// let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
// `inside the funcSix function test`
// #4.2 
// `inside the funcSix function 1`

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// `in the if block 5`
// `outside of the if block 2` 
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// `in the if block 2`
// `outside of the if block 2` 

// exercise2
let experiencePoints  = winBattle = () => {
    return (experiencePoints ? 10 : 1)
}

console.log(experiencePoints());

// exercise3
let check1 = [1,2,3]
let check2 = "this is a string"

isString = (variable) => {
    return typeof variable === "string";
}
console.log(isString(check2));

// exercise4
sum = (a,b) => { return a+b }
console.log(sum(1,1));

// exercise5
let kg = 1.2
function weight(){
    let grams = kg * 1000
    console.log(`The weight in func weight is ${grams}g`);
}

weight()

const funcWeight = function () {
    let grams = kg * 1000
    console.log(`The weight in func funcWeight is ${grams}g`);
}

funcWeight()

// the function expression doesn't use a function name, we can invoke it using the variable name

const arrowWeight = () => {let grams = kg * 1000
     return `The weight in arrowWeight is ${grams}g`}

console.log(arrowWeight);

// exercise6
(function (numberOfChildren, partnerName, geographicLocation, jobTitle){
    console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`);
}(12,"John","Paris","lawyer"))

// exericise7
(function(user){
    let navBar = document.getElementById("navbar")
    userName = document.createElement("div")
    userPicture = document.createElement("img")
    navBar.appendChild(userName)
    navBar.appendChild(userPicture)
    userName.textContent = user
    userPicture.src = 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
    console.log(navBar);
}(user))

// exercise8
function makeJuice(sizeWanted){
    let ingredient = []
    function addIngredients(ingredient1,ingredient2,ingredient3){
        if (sizeWanted === "large"){
            console.log(`The client wants a ${sizeWanted} juice, containing ${ingredient1},${ingredient2}, ${ingredient3}`);
            ingredient.push(ingredient1,ingredient2,ingredient3)
        }

    }
    function displaysJuice(){
        console.log(`the client want a ${sizeWanted} juice, containing ${ingredient.join(', ')}`)
        
    }
    addIngredients("apple", "orange", "pineapple")
    addIngredients("cherry","strawberry","melon")
    console.log(ingredient);
    displaysJuice()
}
makeJuice("large")

