const express = require('express')

let books = [
    {id: 1, title: 'aaa', author: 'AAA', publishedYear: 1999 },
    {id: 2, title: 'bbb', author: 'BBB', publishedYear: 2000 },
    {id: 3, title: 'ccc', author: 'CCC', publishedYear: 2001 },
    {id: 4, title: 'ddd', author: 'DDD', publishedYear: 2002 },
    {id: 5, title: 'eee', author: 'EEE', publishedYear: 2003 },
]

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, 'localhost', () => {
    console.log('Server is running')
})

app.get("/api/books", (req, res) => {
    res.json(books);
  });

app.get('/api/books/:id', (req,res) => {
    const {id} = req.params
    const book = books.find((item) => item.id == id)
    if (!book) {
        return res.status(404).json({msg: 'book notfound'})
  }
    res.status(200).json(book);
})

app.post('/api/books/', (req,res) => {
    console.log(req.body);
    books.push(req.body)
    res.status(201).json(books)
})