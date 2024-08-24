import React from 'react'
import { useState } from 'react';

const Counter = (props) => {  //*here name is the prop 
  // *whenever we will use the useState() the the value of that variable will be retained after the refresh also means it will not get loosed (data loss will be not there)


  // !useStae returs Array and that Array has two things = [actualVariable , functionTo Mutaed that state];

  // ^problem with the normal variables is when the page will get refresed t hen the value also get refreshed we will loose that value hence using the useState() hook

  const [count , setCount] =  useState(0);

  console.log(props.name);
  // ^Now I will try to change the value of the props that is name value I will change but props will not allow me to change 
  // props.name = "Manisha";  //!it is not allowed 
 
  
  

  // setCount(10);    //*with this function I can set the value of the count variable state 

  // !Implementing the logic to increment and decrement the count state using functions only 
  const incrementCounter = () => {
    setCount(count + 1);
  }

  const decrementCounter = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count : {count}</p>

      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>


    </div> 
  )
}

export default Counter