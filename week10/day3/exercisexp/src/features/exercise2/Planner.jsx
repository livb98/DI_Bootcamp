import { plannerSlice } from "./plannerSlice"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Task from "./Task"
import {
    addtask,
} from './plannerSlice'

const Planner = (props) => {
    const [date, setDate] = useState()
    const dateRef = useRef(null)

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };


    return (
        <>
        <h1>planner </h1>
        <div>
            <header>{date}</header>
            <input ref={dateRef} type="date" onChange={handleDateChange}/>
            <Task date={date}/>
        </div>
        </>
    )
}

export default Planner