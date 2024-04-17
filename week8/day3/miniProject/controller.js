const express = require('express')
const {db} = require('./config')

const {_getAllTask, _getTaskById, _createTask, _updateTask, _delTask} = require('./models')

const getAllTask = (req,res) => {
    _getAllTask()
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })
}
const getTaskById = (req,res) => {
    const {id} = req.params
    _getTaskById(id)
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })
}

const createTask = (req,res) => {
    const {task,done} = req.body
    _createTask(task,done)
    .then(data=>{
        res.json(data)
      })
      .catch((e)=>{
        console.log(e);
      })

}

const updateTask = (req,res) =>{
    const {id} = req.params
    const {task,done} = req.body
    _updateTask(id,task,done)
    .then(data=>{
        res.json(data)
      })
      .catch((e)=>{
        console.log(e);
      })
}

const delTask = (req,res) => {
    const {id} = req.params
    _delTask(id)
    .then(data=>{
        res.json(data)
      })
      .catch((e)=>{
        console.log(e);
      })

}

module.exports = {getAllTask, getTaskById, createTask, updateTask, delTask}