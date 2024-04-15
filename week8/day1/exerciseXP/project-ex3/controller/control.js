const books = [
    {id: 1, title: 'aaa', author: 'AAA'},
    {id: 2, title: 'bbb', author: 'BBB'},
    {id: 3, title: 'ccc', author: 'CCC'},
];
module.exports = books

// Get all books
const getBooks = (req,res) => {
    res.json(books)
}

const getBookById = (req,res) => {
    const {id} = req.params;
    const book = books.find((item) => item.id == id)
    if (!book) {
        return res.status(404).json({msg: 'not found'})
    }
    else {
        res.status(200).json(book)
    }
}


// Add a new book
const addBook = (req,res) => {
    console.log(req.body);
    books.push(req.body)
    res.json(books)
}


// Update a book by ID
const updateBook = (req,res) => {
    const { id } = req.params;
    const { title,author } = req.body;
    const index = books.findIndex((item) => item.id == id);

    if (index === -1) {
        return res.status(404).json({ msg: "not found" });
      }
    
    books[index] = {
        ...books[index],
        title,
        author
    }

    res.json(books)
}

// Delete a book by ID
const deleteBook = (req, res) => {
    const { id } = req.params;
    const index = books.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ msg: "not found" });
    }
    books.splice(index, 1);
    res.json(books);
  };
  

module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}