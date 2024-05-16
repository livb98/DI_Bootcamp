import { plannerSlice } from "./plannerSlice"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    addtask,
    filtertask
} from './plannerSlice'

const Task = (date ) => {
    const task = useSelector(state => state.plannerReducer.task)
    const taskRef = useRef()
    const dispatch = useDispatch()


    const addTask = () => {
        dispatch(addtask({name: taskRef.current.value, date: date }))
        taskRef.current.value = ''

    }

    const filterTask = () => {
        dispatch(filtertask({date}))

    }
    return (
        <>
        <div>
            <h2>todo list </h2>
            <input ref={taskRef}/>
            <button onClick={()=>addTask()}>add task</button>
            <button onClick={()=>filterTask()}>Filter Tasks</button>
            <div>
                {task.map(item => 
                    {return  (
                    <div key={item.id}>
                        {item.name}
                    </div>
                )})}
            </div>
        </div>
            
        </>
    )
}

export default Task