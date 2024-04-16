const express = require('express')
const {db} = require('./config')
const router = express.Router();

const {readAll, read, createBook} = require('./controller')

router.get('/api/books',readAll)
router.get('/api/books/:id',read)
router.post('/api/books', createBook)

module.exports = router;