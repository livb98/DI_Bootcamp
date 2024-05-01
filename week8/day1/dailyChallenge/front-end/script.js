let questionAsk = {};
let userAnswer = document.getElementById("answer")
let questionUser = document.getElementById("question")
let subAnswer = document.getElementById("subAnswer")
let divAnswer = document.getElementById("answerDiv")
let result = document.getElementById("result")
let answerToQuestion

let i
function getQuizz() {

  fetch("http://127.0.0.1:3001/question")
    .then((res) => res.json())
    .then((data) => { 
      questionAsk = data[0].question;
      answerToQuestion = data[0].answer;
      questionUser.innerHTML = questionAsk
    })
    .catch((err) => {
      console.log(err);
    });
}

getQuizz();


const submitAnswer = () => {
    userAnswer.value
    try {
      if (userAnswer.value.toLowerCase() === answerToQuestion.toLowerCase()){
        result.innerHTML = 'good answer'
        getQuizz2()
      }
      else{
        result.innerHTML = 'wrong answer';
      };
    }
    catch (e){
      console.log(e);
    }

}


