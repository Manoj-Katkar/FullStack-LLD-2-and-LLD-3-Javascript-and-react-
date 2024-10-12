import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {

    // Example where we will see How useRef() referance will be persistance and it will not allow to my component get re-render 

    let [time , setTime] = useState(0);

    // now to give the stop functionality I have to clear the interval for that I will use the useRef referance 
    let stopRef = useRef();


    let handleClick = (event) => {
        clearInterval(stopRef.current);
    }

    let reSetTimer = (event) => {
        setTime(0);
    }

    let startTimer = (event) => {
        stopRef.current = setInterval(() => {
            // update the state 
            setTime((previousTime) => {
                return previousTime+1;
            })
        } , 1000)
    }

    // lets laos use the useEffect when my comonent will get rendred timer should start 
    // !Note : make sure you are not using the strictMode that will render the useEffect twice 

    useEffect(() => {
        console.log("useEffect");
        
        stopRef.current = setInterval(() => {
            // update the state 
            setTime((previousTime) => {
                return previousTime+1;
            })

        } , 1000);

    } , [])

  return (
    <div>
        <h2>Time : {time}</h2>
        <button onClick={handleClick}>Stop Timer</button>
        <button onClick={reSetTimer}>Reset</button>
        <button onClick={startTimer}>Start Timer</button>
    </div>
  )
}

export default Timer