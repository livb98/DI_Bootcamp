// // exercise1
// function displayNumbersDivisible() {
//     let sum = 0;

//     for (let i = 0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             console.log(i);
//             sum += i;
//         }
//     }

//     console.log(sum);
// }

// displayNumbersDivisible();

// // exercise2
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ['banana', 'orange', 'apple']

// function myBill(){
//     let price = 0
//     for (let fruit of shoppingList){
    
//         if (stock[fruit] > 0){
//             console.log(prices[fruit])
//             price += prices[fruit];
            
//         }

//     }
//     console.log(price);
// }

// myBill()

// // exercise3
// function changeEnough(itemPrice, amountOfChange) {
//     const change = [0.25, 0.10, 0.05, 0.01];
//     let sum = 0;
    
//     for (let i = 0; i < amountOfChange.length; i++) {
//         sum += amountOfChange[i] * change[i];
//     }
    
//     return sum >= itemPrice;
// }

// console.log(changeEnough(14.11, [2, 100, 0, 0])); 
// console.log(changeEnough(4.25, [25, 20, 5, 0])); 

// // exercise4
// function hotelCost(){
//     let nightStay
//     do {
//         nightStay = prompt("How many nights would you like to stay?");
//     } while (isNaN(nightStay) || nightStay.trim() === ""); 

//     // return nightStay;

//     let costOneNight =  140
//     let costTotal = nightStay*costOneNight
    
//     return costTotal
    
// }
// function planeRideCost() {
//     let destination;
//     do {
//         destination = prompt("What is your destination?");
//     } while (!destination || typeof destination !== 'string');

//     let priceDestination;

//     if (destination.toLowerCase() === 'paris') {
//         priceDestination = 220;
//     } else if (destination.toLowerCase() === 'london') {
//         priceDestination = 183;
//     } else {
//         priceDestination = 300;
//     }

//     return priceDestination;
// }

// function rentalCarCost() {
//     let numberOfDays;
//     do {
//         numberOfDays = prompt("How many days would you like to rent the car?");
//     } while (numberOfDays === null || isNaN(numberOfDays) || numberOfDays.trim() === ""); 

//     const dailyRate = 40;
//     let totalPrice = numberOfDays * dailyRate;

//     if (numberOfDays > 10) {
//         totalPrice *= 0.95; 
//     }
//     return totalPrice;
// }

// function totalVacationCost() {
//     let hotel = hotelCost();
//     let planeTicket = planeRideCost();
//     let carRental = rentalCarCost();

//     let totalCost = hotel + planeTicket + carRental;
//     console.log("Total vacation cost: $" + totalCost);
//     return totalCost;}

// totalVacationCost();

// // exercise5

// let div = document.querySelector('#container');
// console.log(div);

// let ul = document.getElementsByClassName('list');
// console.log(ul);

// let ulFirst = ul[0]
// ulFirst.lastElementChild.innerHTML = 'Richard'

// let ulSec = ul[1]
// ulSec.removeChild(ul[1].children[1])

// for (list of ul){
//     list.firstElementChild.innerHTML = 'Livnath'
// }

// ulFirst.setAttribute('class','student_list')
// ulSec.setAttribute('class','student_list')

// ulFirst.classList.add('university','attendance')

// div.style.backgroundColor = 'lightblue'
// div.style.padding = '10px'

// ulSec.lastElementChild.style.display = 'none'
// ulFirst.lastElementChild.style.border = '1px solid black'

// let body = document.querySelector('body')
// body.style.fontSize = '50px'

// // exercise6

// var navBar = document.getElementById("navBar");
// navBar.setAttribute("id", "socialNetworkNavigation");
// var newListItem = document.createElement("li")
// var newText = document.createTextNode("Logout")
// newListItem.appendChild(newText)
// var ul = document.querySelector("#socialNetworkNavigation ul")
// ul.appendChild(newListItem)
// var firstLi = ul.firstElementChild;
// var lastLi = ul.lastElementChild;
// console.log("First link: " + firstLi.textContent);
// console.log("Last link: " + lastLi.textContent);

// // exercise7
// const allBooks = [
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         image: "https://example.com/to-kill-a-mockingbird.jpg",
//         alreadyRead: true
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         image: "https://example.com/1984.jpg",
//         alreadyRead: false
//     }
// ];


// function renderBooks() {
//     const listBooksSection = document.querySelector('.listBooks');
    
//     allBooks.forEach(book => {

//         const bookDiv = document.createElement('div');


//         const imageElement = document.createElement('img');
//         imageElement.src = book.image;
//         imageElement.style.width = '100px';
//         bookDiv.appendChild(imageElement);


//         const titleAuthorText = document.createTextNode(`${book.title} written by ${book.author}`);
//         bookDiv.appendChild(titleAuthorText);


//         if (book.alreadyRead) {
//             bookDiv.style.color = 'red';
//         }


//         listBooksSection.appendChild(bookDiv);
//     });
// }
// renderBooks();

