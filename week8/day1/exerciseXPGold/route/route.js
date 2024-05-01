const express = require('express')

const router = express.Router()

module.exports = router

const {getPost, getPostById, createPost, updatePost, delPost} = require('../control/controller')

router.get('/posts', getPost)
router.get('/posts/:id', getPostById)
router.post('/posts', createPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', delPost)