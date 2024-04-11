const axios = require('axios')
const express = require('express');
const { fetchPost } = require('./data/dataService');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(5000, 'localhost', () => {
    console.log('server running')
})



console.log(fetchPost('https://jsonplaceholder.typicode.com/posts'));
app.get('/user', (req,res) =>{
    res.json(data); 
    });
