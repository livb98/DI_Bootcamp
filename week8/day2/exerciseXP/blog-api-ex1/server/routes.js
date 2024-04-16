const express = require('express')
const {db} = require('./config')
const router = express.Router();

const {getPosts, getPostById, createPost,updatePost,delPost} = require('./controller')

router.get('/posts', getPosts)
router.get('/posts/:id',getPostById)
router.post('/posts',createPost)
router.put('/posts/:id',updatePost)
router.delete('/posts/:id',delPost)

module.exports = router;