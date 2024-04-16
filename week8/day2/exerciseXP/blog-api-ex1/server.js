const express = require('express')
const app = express()
const { db } = require('../blog-api-ex1/server/config');
const post_router = require('./server/routes');
const { getPosts } = require('../blog-api-ex1/server/controller');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
//   });

// app.use('/',post_router);


// app.get('/posts',getPosts)
// app.get('/posts/:id',getPostById)
// app.post('/posts',_createPost)
// app.put('/posts/:id',_updatePost)
// app.delete('/posts/:id',_delPost)


