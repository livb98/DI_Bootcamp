import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, deleteTask } from './plannerSlice';

const Task = ({ date }) => {
    const tasks = useSelector(state => state.plannerReducer.tasks.filter(task => task.date === date));
    const taskRef = useRef();
    const dispatch = useDispatch();
    const [editingTask, setEditingTask] = useState(null);
    const [taskName, setTaskName] = useState('');

    const handleAddTask = () => {
        dispatch(addTask({ name: taskRef.current.value, date }));
        taskRef.current.value = '';
    };

    const handleEditTask = (task) => {
        setEditingTask(task.id);
        setTaskName(task.name);
    };

    const handleUpdateTask = () => {
        dispatch(editTask({ id: editingTask, name: taskName }));
        setEditingTask(null);
        setTaskName('');
    };

    const handleDeleteTask = (id) => {
        dispatch(deleteTask({ id }));
    };

    return (
        <div>
            <h2>Todo List for {date}</h2>
            <input ref={taskRef} placeholder="New Task" />
            <button onClick={handleAddTask}>Add Task</button>
            <div>
                {tasks.map(task => (
                    <div key={task.id}>
                        {editingTask === task.id ? (
                            <div>
                                <input 
                                    value={taskName} 
                                    onChange={(e) => setTaskName(e.target.value)} 
                                    placeholder="Edit Task"
                                />
                                <button onClick={handleUpdateTask}>Update</button>
                            </div>
                        ) : (
                            <div>
                                {task.name}
                                <button onClick={() => handleEditTask(task)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Task;

