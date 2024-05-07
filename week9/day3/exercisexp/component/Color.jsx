import React, { useState, Component } from "react";

// // exercise2
// class Color extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             color: 'red'
//         }
//     }

//     componentDidMount() {
//         this.changeColorTimer();
//     }

//     shouldComponentUpdate(nextProps) {
        
//         return true
//     }
//     componentDidUpdate() {
//         if(this.state.color !== 'red')
//             this.shouldComponentUpdate = false
//             console.log("after update")
//     }
//     changeColor = () => {
//         this.setState(prevState => ({
//             color: 'blue'
//         }), () => {}
//         )
//     }
//     changeColorTimer = () => {
//         setTimeout(() => {
//             this.setState(prevState => ({
//                 color: 'yellow'}));
//         }, 3000);
//         console.log(this.state.color);
//     };
//      getSnapshotBeforeUpdate() {
//         console.log("in getSnapshotBeforeUpdate")
//         console.log(this.state.color);
//         return this.state.color
//     }

//     render() {
//         if (this.shouldComponentUpdate === false) {
//             return console.log('error');
            
//         }
//         return (
//             <div>
//                 <header>my favorite color is <i> {this.state.color} </i></header>
//                 <button onClick={this.changeColor}>change color</button>
//             </div>
//         );
//     }

// }

// exercise3
class Color extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'red',
            show: true
        }
    }

    componentDidMount() {
        this.changeColorTimer();
    }

    shouldComponentUpdate(nextProps) {
        
        return true
    }
    componentDidUpdate() {
        if(this.state.color !== 'red')
            this.shouldComponentUpdate = false
            console.log("after update")
    }
    changeColor = () => {
        this.setState(prevState => ({
            color: 'blue'
        }), () => {}
        )
    }
    changeColorTimer = () => {
        setTimeout(() => {
            this.setState(prevState => ({
                color: 'yellow'}));
        }, 3000);
        console.log(this.state.color);
    };
     getSnapshotBeforeUpdate() {
        console.log("in getSnapshotBeforeUpdate")
        console.log(this.state.color);
        return this.state.color
    }

    handleDelete = () => {
        this.setState({ show: false });
      };

    render() {
        if (this.shouldComponentUpdate === false) {
            return console.log('error');
            
        }
        return (
            <>
            <div>
                <header>my favorite color is <i> {this.state.color} </i></header>
                <button onClick={this.changeColor}>change color</button>
            </div>
            <div>
                {this.state.show && <Child />}
                {this.state.show && <button onClick={this.handleDelete}>Delete</button>}
            </div>
            </>
            
        );
        
    }

}

export class Child extends React.Component {
    componentWillUnmount() {
        alert('Component is about to be unmounted');
      }
    
      render() {
        return <h1>Hello World!</h1>;
      }
}

export default Color;



