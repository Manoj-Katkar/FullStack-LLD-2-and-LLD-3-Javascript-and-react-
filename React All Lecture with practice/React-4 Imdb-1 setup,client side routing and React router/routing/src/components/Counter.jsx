import React from 'react'
import { useState } from 'react';

const Counter = ({ index, value }) => {
  // console.log(index);
  // console.log(value);

  let [count , setCount] = useState(value);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);

  };
  return (
    <div>
      <h2>Counter Number: {index}</h2>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter