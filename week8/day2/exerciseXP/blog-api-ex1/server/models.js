const {db} = require('./config')


const _getPosts = () => {
    return db('posts')
    .select('*')


}

const _getPostById = (prod_id) => {
    return db('posts')
        .select('*')
        .where({ id: prod_id })

}

const _createPost = (title,content) => {
    return db('posts')
    .insert({title:title,content:content}, ['*'])

}

const _updatePost = (id,title,content) => {
    return db('posts')
    .where({id:id})
    .update({title:title,content:content}, ['*'])

}

const _delPost = (id) => {
    return db('posts')
    .where({id:id})
    .del(['*'])

}


module.exports = {_getPosts, _getPostById, _createPost, _updatePost, _delPost}