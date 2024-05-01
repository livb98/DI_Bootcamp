const express = require('express')
const app = express()

const router = require("./routes/book")

const {getBooks} = require("./controller/control.js")

app.listen(3002, () => {
    console.log("run on 3002");
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', router)




