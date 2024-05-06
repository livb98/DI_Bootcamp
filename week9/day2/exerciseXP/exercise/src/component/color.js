import React, { useState, useEffect } from "react";

const Color = (props) => {
    const [favoriteColor, setColor] = useState('red');

    useEffect(() => {
        alert("useEffect reached");
        setColor('yellow')
    });

    function changeColor(){
        setColor('blue')
    }

    return (
        <div>
            <header>my favorite color is <i>{favoriteColor}</i></header>
            <button onClick={changeColor}>change color</button>
        </div>
    );
}

export default Color;


