const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const {db} = require('./config.js');

// const {register,login} = require('./controller.js')
const {getUser, register, login, getUserById} = require('./controller.js')


router.post('/register', register)
router.post('/login', login)
router.get('/users', getUser)
router.get('/users/:id',getUserById)



module.exports = router;
