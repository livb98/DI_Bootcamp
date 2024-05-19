import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, completeTask, removeTask, filterCategory } from './taskSlice';
import './todo.css';
import CategoriesList from './Categories';

const Task = () => {
    const tasks = useSelector(state => state.TasksReducer.tasks);
    const categories = useSelector(state => state.TasksReducer.categories);
    const taskRef = useRef();
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const taskName = taskRef.current?.value.trim();
        const category = selectedCategory;
        if (taskName && category) {
            dispatch(addTask({ name: taskName, category }));
            taskRef.current.value = '';
        }
    };

    const handleCompleteTask = (id) => {
        dispatch(completeTask(id));
    };

    const handleRemoveTask = (id) => {
        dispatch(removeTask(id));
    };

    const handleFilterCategory = (category) => {
        setSelectedCategory(category);
        dispatch(filterCategory(category));
        console.log(`Filtering by category: ${category}`);
    };

    const filteredTasks = selectedCategory 
        ? tasks.filter(task => task.category === selectedCategory) 
        : tasks;

    return (
        <>
            <h2>Tasks:</h2>
            <CategoriesList onSelectCategory={handleFilterCategory} />
            <input ref={taskRef} placeholder="Task name" />
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">all tasks</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button onClick={handleAddTask}>Add Task</button>
            <div>
                {filteredTasks.map((item) => (
                    <div key={item.id}>
                        <span 
                            className={item.completed ? 'completed' : ''} 
                            onClick={() => handleCompleteTask(item.id)}
                        >
                            {item.name} ({item.category})
                        </span>
                        <button onClick={() => handleRemoveTask(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Task;
