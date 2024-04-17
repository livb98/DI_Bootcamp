const express = require('express')
const app = express()
const { db } = require('./config');
const post_router = require('./routes');
const {getAllTask} = require('./controller')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

app.use('/',post_router);
