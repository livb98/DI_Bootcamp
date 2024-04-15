const express = require('express')
const {getAllTask, 
    addTask, 
    updateTask,
     getTaskByID,
     deleteTask} = require("../controller/control.js")

const router = express.Router()

module.exports = router

router.get("/todos", getAllTask)
router.get('/todos/:id', getTaskByID)
router.post('/todos', addTask)
router.put('/todos/:id', updateTask)
router.delete('/todos/:id', deleteTask)