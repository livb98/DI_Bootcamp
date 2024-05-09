import React, { useState } from "react";

const Calculator = (props) => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    const addition = () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        setResult(number1 + number2);
        console.log(number1,number2);
    };

    return (
        <>
        <div style={{backgroundColor: 'purple', color: 'white', width: '80vw', display:'flex', flexDirection: 'column', alignItems: 'center', height: '60vh', justifyContent: 'space-evenly'}}>
            <header>Add two numbers</header>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <input
                    type="text"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="number..."
                    style={{
                        width: '20vw',
                        height: '10vh',
                        margin: '20px',
                        backgroundColor: 'lightpink'
                    }}
                />  
                <input
                    type="text"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="number..."
                    style={{
                        width: '20vw',
                        height: '10vh',
                        margin: '20px',
                        backgroundColor: 'lightpink'
                    }}
                /><br/>
            </div>

            <button onClick={addition} style={{width: "30vw", backgroundColor: 'lightpink'}}>Add</button>
            <div style={{ width: '30vw', height: "10vh", }}>{result}</div>
        </div>

        </>
    );
};

export default Calculator;
