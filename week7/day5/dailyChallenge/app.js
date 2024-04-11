// // const express = require('express')
// // const app = express()

let emojiSelect = document.getElementById('emoji')
let pic = document.getElementById('pic')
let submit = document.getElementById('submit')
let form = document.getElementById('emojiForm')


const emojiArr = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
  ];




const randomIndex = Math.floor(Math.random() * emojiArr.length);
let i = emojiArr[randomIndex]
let y = Object.values(i)
let z = y[0]

pic.textContent = z

emojiArr.forEach(emoji => {
    const optionDiv = document.createElement('option');
    optionDiv.value = emoji.name
    optionDiv.textContent = emoji.name
    emojiSelect.appendChild(optionDiv)

  });


//   console.log(Object.values(y)[1]);
  


