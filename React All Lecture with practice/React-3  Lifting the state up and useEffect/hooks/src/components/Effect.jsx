import React, { useEffect, useState } from 'react'

const Effect = () => {
/**
 * !Now lets learn the multiple variations of the useEffect() hook  Total 3 Types are there :
 * *                              1) useEffect((callback function), [with empty dependancy array]) :
 *                                                      ^callback will get triggred on the 1st re-rendering
 *                                  
 * *                              2) useEffect((callback function), [with array having dependencies in it]) :
 *                                                       ^callback will get triggred on the basis on dependencies
 * 
 * *                              3) useEffect((callback function),  not passing dependancy array) :
 *                                                        ^callback will get triggred on every re-rendering  
 */

    const [Count , setCount] = useState(0);
    const [Count1, setCounter1] = useState(0)

    // !Now I have to write the increment logic for the counter 
    const incrementCount = () => {

        setCount(Count + 1);

    }

    const incrementCount1 = () => {

        setCounter1(Count1 + 1);

    }

    // ^Covering the all the dependencies 
    // Now lets learn the multiple variations of the useEffect() hook 

    // !taking the useEffect hook by passing the dependancy array

    useEffect(() => {
        //*so whenever the count value will get change using the useState hook hen for that updation part to see in the UI we cal change the title of that React app 

        document.title = Count;

    } , [Count]);  //*with dependancy array


    // now using the useEffect() hook by  providing empty dependancy array 
    useEffect(() => {

        console.log("I will get trrigred on first rendering only")
        
    } , [])



    // now using the useEffect() hook by not providing any dependancy array 
    useEffect(() => {
        console.log("I will be trigred on the every re-rendering");
        
    })



  return (
    <div>
        <div>Count value : {Count}</div>
        <button onClick={incrementCount}>Increment Counter</button>
        <button onClick={incrementCount1}>Increment Counter1</button>

    </div>
  )
}

export default Effect