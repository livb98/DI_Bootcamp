let questionAsk = {};
let userAnswer = document.getElementById("answer")
let questionUser = document.getElementById("question")
let subAnswer = document.getElementById("subAnswer")
let divAnswer = document.getElementById("answerDiv")
let result = document.getElementById("result")
let answerToQuestion

function getQuizz() {
  fetch("http://127.0.0.1:3001/question")
    .then((res) => res.json())
    .then((data) => {
      questionAsk = data.question
      answerToQuestion = data.answer
      render(questionAsk)
    })
    .catch((err) => {
      console.log(err);
    });
}

getQuizz();

function render(question) {
  console.log(question);
  questionUser.innerHTML = question

  }

const submitAnswer = () => {
  userAnswer.value;
  try {
    if (userAnswer.value.toLowerCase() === answerToQuestion.toLowerCase()){
      result.innerHTML = 'good answer'
    }
    else{
      result.innerHTML = 'wrong answer';
    }
  } catch (e){
    console.log(e);
  }
}

