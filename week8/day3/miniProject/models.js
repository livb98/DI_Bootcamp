const {db} = require('./config')

const _getAllTask = () => {
    return db('task')
    .select('*')
}

const _getTaskById = (id) => {
    return db('task')
    .select('*')
    .where({id:id})
}

const _createTask = (task, done) => {
    return db('task')
    .insert({task:task,done:false}, ['*'])
}

const _updateTask = (id,task, done) => {
    return db('task')
    .update({task:task,done:done}, ['*'])
    .where({id:id})
}


const _delTask = (id) => {
    return db('task')
    .where({id:id})
    .delete('*')
}

module.exports = {_getAllTask, _getTaskById, _createTask, _updateTask, _delTask}