let questionAsk = {};
let userAnswer = document.getElementById("answer")
let questionUser = document.getElementById("question")
let subAnswer = document.getElementById("subAnswer")
let divAnswer = document.getElementById("answerDiv")
let result = document.getElementById("result")
let answerToQuestion


function getQuizz(index) {
  fetch("http://127.0.0.1:3001/question")
    .then((res) => res.json())
    .then((data) => { 
      questionAsk = data[index].question;
      answerToQuestion = data[index].answer;
      questionID = data[index].id
      console.log(questionID);
      questionUser.innerHTML = questionAsk
    })
    .catch((err) => {
      console.log(err);
    });
}

getQuizz(0);


const submitAnswer = () => {
    userAnswer.value
    try {
      if (userAnswer.value.toLowerCase() === answerToQuestion.toLowerCase()){
        result.innerHTML = 'good answer'
       let i = 0
       i += 1
        getQuizz(i)
        console.log(userAnswer.value);
        console.log(answerToQuestion);
        console.log(questionID);
     
      }
      else{
        result.innerHTML = 'wrong answer';
      };
    }
    catch (e){
      console.log(e);
    }


}


