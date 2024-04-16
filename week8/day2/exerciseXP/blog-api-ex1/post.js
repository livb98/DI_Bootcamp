const knex = require('knex')
const dotenv = require('dotenv')
dotenv.config()


const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD,PGPORT} = process.env
console.log(PGHOST, PGDATABASE, PGUSER, PGPASSWORD,PGPORT);

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,

    }
})

const _getPosts = (req,res) => {
    return db('posts')
    .select('*')
    .then(data => {
        console.log(data);
        res.json(data)
    })
    .catch((e) => {
        console.log(e);
    })

}

const _getPostById = (req,res) => {
    const { id } = req.params;
    return db('posts')
        .select('*')
        .where({ id: id })
        .then(data => {
            console.log(data);
            res.json(data);
        })
    .catch((e) => {
        console.log(e);
    })
}

const _createPost = (req,res) => {
    const{title,content} = req.body
    return db('posts')
    .insert({title:title,content:content}, ['*'])
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
    })
}

const _updatePost = (req,res) => {
    const {id} = req.params
    const{title,content} = req.body
    return db('posts')
    .where({id:id})
    .update({title:title,content:content}, ['*'])
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
    })
}

const _delPost = (req,res) => {
    const{id} = req.params
    return db('posts')
    .where({id:id})
    .del(['*'])
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
    })
}


module.exports = {_getPosts, _getPostById, _createPost, _updatePost, _delPost}

