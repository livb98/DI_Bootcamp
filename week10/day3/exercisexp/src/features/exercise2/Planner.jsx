import React, { useState, useRef } from "react";
import Task from "./Task";

const Planner = () => {
    const [date, setDate] = useState('');
    const dateRef = useRef(null);

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <>
            <h1>Planner</h1>
            <div>
                <header>Selected Date: {date}</header>
                <input ref={dateRef} type="date" onChange={handleDateChange} />
                <Task date={date} />
            </div>
        </>
    );
};

export default Planner;


