const express = require('express')
const {triviaQuestions} = require('../question/data')
const router = express.Router();

const {getQuestion, startQuizz, displayAnswer} = require('../controller/question.controller')

module.exports = router

router.get('/question', getQuestion)
router.get('/quizz', startQuizz)
router.post('/quizz', displayAnswer)
