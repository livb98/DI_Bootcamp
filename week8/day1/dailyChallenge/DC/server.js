const express = require('express');
const router = require('./routes/question.routes.js')
const cors = require("cors");

const app = express();

app.listen(3001, () => {
    console.log("run on 3001");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// const {getQuizz} = require('./controller/question.controller.js');
const { triviaQuestions } = require('./question/data.js');
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use('/', router)
let index = 0;
app.get('/question',question)

function question(req,res){
  let questions = triviaQuestions[index].question
  let answer = triviaQuestions[index].answer
  let trivia = triviaQuestions[index]
  res.json(trivia)
  console.log(triviaQuestions[index]);
}

