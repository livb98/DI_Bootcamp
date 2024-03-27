// exercise1
let getTitle = document.getElementsByTagName("h1");
console.log(getTitle);

let getArt = document.querySelector("article")
let getP = document.querySelectorAll("p")
let getPLast = getP[3]
getPLast.remove()

let title2 = document.querySelector("h2")
title2.addEventListener("click", changeColor)
function changeColor() {
    title2.style.backgroundColor = "red";
}

let title3 = document.querySelector("h3")
title3.addEventListener("click", hide)
function hide() {
    title3.style.display ='none';
}

let makeBold = document.querySelector("button")
makeBold.addEventListener("click", RespondClick);
console.log(makeBold);
function RespondClick(){
    for (let p of getP){
        p.style.fontWeight = "bolder"
    }
}


// exercise3
let allBoldItems = ''
let paragraph = document.getElementById("par")
function getBoldItems(){
    allBoldItems = paragraph.querySelectorAll('strong');
}  
getBoldItems()

console.log(allBoldItems);

function highlight(){
    for (let i of allBoldItems){
        i.style.color = "blue"
    }
}

function returnItemsToDefault(){
    for (let item of allBoldItems){
        item.style.color = "black"
    }
}

paragraph.addEventListener('mouseover',highlight)
paragraph.addEventListener('mouseout',returnItemsToDefault)
