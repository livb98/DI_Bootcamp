const express = require('express')
const app = express()

const router = require("./route/route")

const {getPost} = require('./control/controller')

app.listen(3001, () => {
    console.log('run on 3001');
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router)

