import React, { useState } from "react";

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
    }
    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }), () => {
            console.log(this.state.count);
            if (this.state.count > 5) {
                throw new Error('I crashed');
            }
        });
    }

    render() {
        return (
            <>
            <button onClick = {this.handleClick}> + </button>
            <p>{this.state.count}</p>

            </>
        )
    }

}

export default BuggyCounter