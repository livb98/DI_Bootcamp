import { TodoSlice } from "./TodoSlice"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import './todo.css'
import { 
    addtask, 
    completetask,
    removetask,
} from "./TodoSlice"

const Todo = (props) => {
    const task = useSelector(state => state.todoReducer.task)
    const taskRef = useRef()
    const dispatch = useDispatch()

    const completeTask = (id) => {
        dispatch(completetask(id))
        console.log(id);
    }

    const addTask = () => {
        dispatch(addtask(taskRef.current?.value))
        taskRef.current.value = ''
    }

    const removeTask = (id) => {
        dispatch(removetask(id))
    }

    return(
        <>
        <div>
            <h2>todo liste</h2>
            <input ref={taskRef}/>
            <button onClick={()=>addTask()}>add task</button>
            <div>
                {task.map((item, index) => 
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
        </div>
        </>
    )

}

export default Todo