const express = require('express')
const {db} = require('./config')
const {_getUsers, _createUser, _getName, _logUser, _findLog} = require('./model')


const getUsers = (req,res) => {
    _getUsers()
    .then(data=>{
        res.json(data)
        return data
      })
      .catch((e)=>{
        console.log(e);
      })
}


const getName = (req,res) => {
    const {name} = req.body
    _getName(name)
    .then(data=>{
        res.json(data)
      })
      .catch((e)=>{
        console.log(e);
      })
}


const createUser = (req,res) => {
    const {name,lastName, email, userName, password} = req.body
    _createUser(name,lastName, email, userName, password)
    .then(data=>{
        res.json(data,name,lastName,email,userName,password);

      })
      .catch((e)=>{
        console.log(e);

      })
}

const logUser = (req,res) => {
    const {userName1,password} = req.body

    _logUser(userName1,password)
    .then(data=>{
        res.json(data);

      })
      .catch((e)=>{
        console.log(e);

      })
}

const findLog = (req,res) => {
    const {userName1,password} = req.body
    console.log(req.body);
    _findLog(userName1,password)
    .then(data=>{
        res.json(data);

      })
      .catch((e)=>{
        console.log(e);

      })
}

module.exports = {getUsers, createUser, getName, logUser, findLog}

