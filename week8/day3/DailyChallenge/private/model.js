const { password } = require('pg/lib/defaults')
const {db} = require('./config')

const _getUsers = () => {
    return db('users')
    .select('*')
}

const _getName = (name) => {
    return db('users')
    .select('name')
}

const _createUser = (name,lastname, email, username, password) => {
    return db('users')
    .insert({name:name,last_name:lastname,email:email,user_name:username,password:password},['id'])
}

const _findLog = (username, password) => {
    return db('users')
    .select('user_name','password')
}

const _logUser = (username, password) => {
    return db('users')
    .insert({user_name:username,password:password},['user_name','password'])
}


module.exports = {_getUsers, _createUser, _getName, _logUser, _findLog}
