const express = require('express');
const app = express();

const {getQuestion,startQuizz} = require('./controller/question.controller.js')

const router = require('./routes/question.routes.js')

app.listen(3001, () => {
    console.log("run on 3001");
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

app.use('/', router)

app.get('/question', getQuestion)
