import { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addtask,completetask,removetask } from "./taskSlice";
import './todo.css'

const Task = (props) => {
    const tasks = useSelector(state => state.TasksReducer.tasks)
    const taskRef = useRef()
    const dispatch = useDispatch()
    console.log(tasks);

    const addTask = () => {
        dispatch(addtask({ name: taskRef.current?.value }));
        taskRef.current.value = '';
    }
    const completeTask = (id) => {
        dispatch(completetask(id))
        console.log(id);
    }
    const removeTask = (id) => {
        dispatch(removetask(id))
        console.log(id);
    }

    return (
        <>
        <h2>task:</h2>
        <input ref={taskRef}/>
        <button onClick={()=>addTask()}>add task</button>
        <div>
            {tasks.map((item, index) => 
                {return  (
                <div key={item.id}>
                    <span className= {item.completed ? 'completed' : ''}
                    onClick={()=>completeTask(index)}>
                    {item.name}
                    </span>
                    <button onClick={()=>removeTask(item.id)}>remove</button>
                </div>
            )})}
        </div>
        </>
    )
}

export default Task