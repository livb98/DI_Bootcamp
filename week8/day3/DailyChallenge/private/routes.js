const express = require('express')
const {db} = require('./config')
const router = express.Router();
const {getUsers, createUser, getName, logUser, findLog} = require('./controller.js')

router.get('/users', getUsers)
router.post('/register', createUser)
router.get('/users/name', getName)
router.post('/login', logUser)
router.get('/login', findLog)

module.exports = router;