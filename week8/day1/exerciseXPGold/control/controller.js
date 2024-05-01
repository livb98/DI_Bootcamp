const blog = [
    {id: 1,title: 'AAA', content: 'aaa', timestamp: '11:11'},
    {id: 2,title: 'BBB', content: 'bbb', timestamp: '22:22'},
    {id: 3,title: 'CCC', content: 'ccc', timestamp: '33:33'},
];
module.exports = blog

// GET /posts: Retrieve a list of all blog posts.
const getPost = (req,res) => {
    res.json(blog)
}

// GET /posts/:id: Retrieve a specific blog post by ID.
const getPostById = (req,res) => {
    const {id} = req.params
    const post = blog.find((item) => 
        item.id == id)
    if (!post) {
        return res.status(404).json({msg: 'not found'})
    } else {
        res.status(200).json(post)
    }
}

// POST /posts: Create a new blog post.
const createPost = (req,res) => {
    console.log(req.body);
    blog.push(req.body)
    res.json(blog)
}

// PUT /posts/:id: Update a blog post by ID.
const updatePost = (req,res) => {
    const {id} = req.params
    const {title,content,timestamp} = req.body
    const index = blog.findIndex((item) => item.id == id)

    if (index === -1) {
        return res.status(404).json({msg: 'not found'})
    }

    blog[index] = {
        ...blog[index],
        title,content,timestamp
    }

    res.json(blog)
}

// DELETE /posts/:id: Delete a blog post by ID.
const delPost = (req,res) => {
    const { id } = req.params;
    const index = blog.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ msg: "not found" });
    }
    blog.splice(index, 1);
    res.json(blog);
}

// Use an in-memory array to store blog posts for this challenge.
// Use appropriate validation and error handling for each route.
// Test your API using a tool like Postman or curl.

module.exports = {getPost, getPostById, createPost, updatePost, delPost}