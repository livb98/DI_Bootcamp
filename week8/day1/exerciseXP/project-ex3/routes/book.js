const express = require('express')

const router = express.Router()

const {getBooks, getBookById, addBook, updateBook,deleteBook } = require("../controller/control")

module.exports = router

router.get('/books',getBooks)
router.get('/books/:id', getBookById)
router.post('/books',addBook)
router.put('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)
