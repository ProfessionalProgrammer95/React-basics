import React, { useState } from 'react'

const Screen8 = function(props) {

    const [x,setX] = useState(1)

    const addValue = (val) => {
        setX(x + val);  //adds the value passed to the current state of x. If no argument is provided it will just increment by one.
    }

    console.log('component render')
    return(
        <div>
            <h1> States in Arrow function</h1>
            <h2>variable x = { x} </h2>

            <button onClick={() => addValue(1)}>Add + 1</button>
        </div>
    )
}
export default Screen8