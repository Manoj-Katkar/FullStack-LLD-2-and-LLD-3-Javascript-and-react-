import React from 'react'

const Child = (props) => {
    console.log(props);

    let {name , count , setCount} = props;

    let handleClick = (event) => {
        setCount(count + 1);
    }
    
  return (
    <div>Child
        <h3>Name : {name} </h3>
        <h3>count : {count}</h3>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Child