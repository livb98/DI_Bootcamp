const express = require('express')
const {db} = require('./config')

const {_readAll, _read, _createBook} = require('./model')

const readAll = (req,res) => {
    _readAll()
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })
}

const read = (req,res) => {
    const {id} = req.params
    _read(id)
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })

}




const createBook = (req,res) => {
    const{title,author,publishedYear} = req.body
    _createBook(title,author,publishedYear)
    .then(data=>{
        res.json(data)
      })
      .catch((e)=>{
        console.log(e);
      })


}


module.exports = {readAll, read, createBook}