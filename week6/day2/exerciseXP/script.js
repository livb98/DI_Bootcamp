// exercise1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

function colorChoice(){
    for (x in colors){
        console.log(`${(Number(x)+1)}# choice is ${colors[x]}`);
    }
}

colorChoice()

if (colors.includes("Violet")){
    console.log("yeah");
}
else {
    console.log("no");
}

// exercise2
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];


function colorChoice2(colors2){
    let [a,b,c,d] = ordinal
            return colors2.map ((i,index) =>
               index == 0 ? `${(index+1)}${b} choice is ${i}` :
               index == 1 ? `${index+1}${c} choice is ${i}` : 
               index == 2 ? `${index+1}${d} choice is ${i}` :
               `${(index+1)}${a} choice is ${i}`
               ).join('\n')
            
        }
    

console.log(colorChoice2(colors2))

//exercise3
//------1------
//['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

//------2------
//['U','S','A']

// exercise4
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let welcomeStudent = []
const arr = users.map((item,index)=>{
    welcomeStudent[index] = `Hello ${item.firstName}`;

})
console.log(welcomeStudent);

let fullStak = users.filter(item =>{
    return item.role = 'Full Stack Resident'
})

console.log(fullStak);

// exercise5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']

const newEpic = epic.reduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
});


console.log(newEpic);

// exercise6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


let arr2 = []
let studentPass = students.filter((item,index) =>{
    if (item.isPassed == true){
        arr2[index] = item
        console.log(`Good job ${item.name}, you passed the course in ${item.course}`);
    }
})
console.log(arr2);

