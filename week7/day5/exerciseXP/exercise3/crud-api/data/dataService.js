const axios = require('axios');
const express =require('express')
const app = express();


function fetchPost(url) {

    let response
    axios.get(url)
        .then(response => {
         response.data})
        .then(data => {return data})
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    app.get('/user', (req,res) =>{
        res.json(data); 
        });
  
 
}

module.exports = { fetchPost };