const todo = [
    {id: 1, task: 'cleaning'}
]

// Get all to-do items
const getAllTask = (req,res) => {
    res.json(todo)
}



// Add a new to-do item
const addTask = (req,res) => {
    console.log(req.body);
    todo.push(req.body)
    res.json(todo)
}

// Update a to-do item by ID
const updateTask = (req,res) => {
    const { id } = req.params;
    const { task } = req.body;
    const index = todo.findIndex((item) => item.id == id);

    if (index === -1) {
        return res.status(404).json({ msg: "not found" });
      }
    
    todo[index] = {
        ...todo[index],
        task
    }

    res.json(todo)
}

const getTaskByID = (req,res) => {
    const {id} = req.params
    const index = todo.findIndex((item) => item.id == id)

    if (index === -1) {
        return res.status(404).json({msg: 'not found'})
    }
    else {
        return res.json(todo)
    }
}

// Delete a to-do item by ID
const deleteTask = (req, res) => {
    const { id } = req.params;
    const index = todo.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ msg: "not found" });
    }
    todo.splice(index, 1);
    res.json(todo);
  };
  
module.exports = {
    getAllTask,
    addTask,
    updateTask,
    getTaskByID,
    deleteTask
}