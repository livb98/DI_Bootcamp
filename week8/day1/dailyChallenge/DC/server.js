const express = require('express');
const router = require('./routes/question.routes.js')
const cors = require("cors");

const app = express();

app.listen(3001, () => {
    console.log("run on 3001");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const {getQuizz} = require('./controller/question.controller.js');
const { triviaQuestions } = require('./question/data.js');
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use('/', router)

app.get('/question', (req,res) => {
  let trivia = triviaArr(triviaQuestions)
  res.json({trivia})
})

const triviaArr = (arr) => {
  let newArr = [];
  for (let i of arr) {
    newArr.push(i);
  }
  console.log(newArr);;
}
triviaArr(triviaQuestions)

// app.get('/question', getQuizz)
