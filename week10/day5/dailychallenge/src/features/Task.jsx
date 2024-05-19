import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTask, completeTask, removeTask, filterCategory } from "./taskSlice";
import './todo.css';
import CategoriesList from "./Categories";

const Task = () => {
    const tasks = useSelector(state => state.TasksReducer.tasks); 
    const categories = useSelector(state => state.TasksReducer.categories); 
    const taskRef = useRef();
    const categoryRef = useRef();
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const taskName = taskRef.current?.value.trim();
        const category = categoryRef.current?.value.trim();
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


    return (
        <>
            <h2>Tasks:</h2>
            <CategoriesList />
            <input ref={taskRef} placeholder="Task name" />
            <select ref={categoryRef}>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button onClick={handleAddTask}>Add Task</button>
            <div>
                {tasks.map((item) => (
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
