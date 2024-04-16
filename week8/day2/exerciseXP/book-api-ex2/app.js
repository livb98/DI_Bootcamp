const express = require('express')
const app = express()
const { db } = require('./config');
const post_router = require('./routes');
const {readAll} = require('./controller.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5001, () => {
    console.log("Server is running on port 5000");
  });

app.use('/',post_router);

