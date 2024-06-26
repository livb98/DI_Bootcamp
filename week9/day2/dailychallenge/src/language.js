import React, { useState } from 'react';

function Vote() {
    const [languages, setLanguages] = useState([
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 }
    ]);

    function counter(i) {
        const cloneLanguages = [...languages];
        cloneLanguages[i].votes += 1;
        setLanguages(cloneLanguages);
    }

    return (
        <div style={{width: '50vw', textAlign: 'center'}}>
            <h1 style = {{textAlign: 'center'}}>Vote for your language</h1>
            <ul style={{ display: 'flex', flexDirection: 'column', fontSize: '20px'}}>
                {languages.map((language, i) => (
                    <li key={i} style={{display: 'flex',justifyContent: 'space-around', listStyle: 'none', border: 'solid black 1px', padding: '10px', backgroundColor: 'beige', margin: '2px' }}>
                        <p>{language.votes}</p>
                        <p>{language.name}</p>
                        <button onClick={() => counter(i)} style={{color: 'green', width: '10vw', border: 'none',
                        backgroundColor: 'beige', fontSize: '20px'}}>
                        Click
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Vote;
