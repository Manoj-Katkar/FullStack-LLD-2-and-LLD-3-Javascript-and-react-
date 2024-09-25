import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);

    let IncrementCounter = (event) => {
        setCount(previousCount => previousCount + 1);
    }

    let DecrementCounter = (event) => {
        setCount(previousCount => previousCount - 1);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={IncrementCounter}>Increment</button>
       
        <button onClick={DecrementCounter}>Decrement</button>
    </div>
  )
}

export default Counter