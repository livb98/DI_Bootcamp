const express = require('express')
const {triviaQuestions} = require('../question/data')
const router = express.Router();

const {getQuizz} = require('../controller/question.controller')

module.exports = router

router.get('/question', getQuizz)

// router.get('/quizz', startQuizz)
// router.post('/quizz', displayAnswer)
