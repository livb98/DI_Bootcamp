import React, {useState} from "react";

const Event = () => {
    const [IsToggleOn, setButton] = useState(true)

    const SwitchButton = () => {
        if (setButton === true)
        console.log('work');
    }

    function clickMe () {
        alert('I was clicked')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter')
        alert(`The enter key was pressed, your input is: ${e.target.value}`)
    }

    return (
        <div>
            <button onClick={clickMe}>click</button><br></br>
            <input onKeyDown={handleKeyDown}></input> <br></br>
            <div>
            {IsToggleOn ? "On" : "Off"}
            </div>
            <button onClick={() => setButton(!IsToggleOn)}>{SwitchButton}on/off button</button>
        </div>

    )
}

export default Event