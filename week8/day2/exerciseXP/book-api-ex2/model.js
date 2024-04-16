const {db} = require('./config')

const _readAll = () => {
    return db('book')
    .select('*')
}

const _read = (id) => {
    return db('book')
    .select('*')
    .where({id:id})
}

const _createBook = (title,author,publishedYear) => {
    return db('book')
    .insert({title:title,author:author,publishedYear:publishedYear}), ['*']
}




module.exports = {_readAll, _read, _createBook}