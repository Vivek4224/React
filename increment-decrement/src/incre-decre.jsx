import React, { useState } from "react";
import { Button } from "reactstrap"

export default function UseStateCom() {

    const buttonStyle = {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
        margin: '2px',

    };

    const headingStyle = {
        color: 'white',
        fontSize: '65px',
        // add other styles as needed
    };


    let [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    const resetCount = () => {
        setCount(count = 0);
    };

    return (
        <div>
            <h1 style={headingStyle}>Count is {count}</h1>
            <Button style={buttonStyle} onClick={() => incrementCount()}>Increment </Button>
            <Button style={buttonStyle} onClick={() => resetCount()}>Reset </Button>
            <Button style={buttonStyle} onClick={() => decrementCount()}>Decrement </Button>
        </div>
    );
}


