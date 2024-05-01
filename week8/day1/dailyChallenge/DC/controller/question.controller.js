const express = require('express')
const {triviaQuestions} = require('../question/data.js')

const getQuizz = (req,res) => {
    res.json(triviaQuestions)
}
let userScore = 0;
let currentQuestionIndex = 0;
let currentAnswerIndex = 0
// GET /quiz: Start the quiz and display the first question.

// const startQuizz = (req, res) => {
//     const firstQuestion = triviaQuestions[currentQuestionIndex];
//     res.json({ question: firstQuestion.question });
//     if (userAnswer === currentQuestion.answer) {
//         userScore++;
//         res.json({ feedback: 'Correct!', score: userScore });
//     } else {
//         res.json({ feedback: 'Incorrect.', score: userScore });
//     }

// };

// POST /quiz: Submit an answer to the current question and move to the next question.

// const displayAnswer = (req,res) => {
//     const firstAnswer = triviaQuestions[currentAnswerIndex]
//     res.json({answer: firstAnswer.answer})

// }
// GET /quiz/score: Display the user’s final score at the end of the quiz.


module.exports = {
    getQuizz,

    // startQuizz,
    // displayAnswer
}

// startQuizz()
