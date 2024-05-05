import React from 'react';
import './exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercise extends React.Component {
    render() {
        return (
        <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1 style={{style_header}}>this is the header</h1>
            {/* <h1 style={{color : 'red', background: 'lightblue'}}>this is the header</h1> */}
            <p className='para'>this is a paragraph</p>
            <a href="url">this is a link</a>
            <p>This is a form</p>
            <form>
                enter your name: <br></br>
                <input></input><button>submit</button>
            </form>
            <p>here is an image</p>
            <img src='https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png' style={{width: '100px', height: '100px'}}></img>
            <ul>there is a list
                <li>coffee</li>
                <li>tea</li>
                <li>milk</li>
            </ul>

        </div>
        )
    }

}

export default Exercise
