const express = require('express')
const {db} = require('./config')

const { _getUser, _register, _login, _getUserById} = require('./model')
// const {_register, _login, _getUser, _getUserById} = require('./model')

const register = (req,res) => {
    const {username, password} = req.body
    _register(username,password)
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })
}

const login = (req,res) => {
    const {username, password} = req.body
    _login(username,password)
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })
}

const getUser = (req,res) => {
    _getUser()
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })
}
const getUserById = (req,res) => {
    const {username, password} = req.body
    _getUserById(username, password)
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })
}


module.exports = { getUser, register, login, getUserById }