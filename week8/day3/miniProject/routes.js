const express = require('express')
const {db} = require('./config')
const router = express.Router();
const {getAllTask, getTaskById, createTask, updateTask, delTask} = require('./controller')

router.get('/tasks', getAllTask)
router.get('/tasks/:id', getTaskById)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', delTask)

module.exports = router;