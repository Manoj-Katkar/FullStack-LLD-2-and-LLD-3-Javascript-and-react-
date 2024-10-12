import React, { useRef, useState } from "react";

const Stopwatch = () => {
  // Here I will take the two states and one referance to store the interval id using the useRef

  let [time, setTime] = useState(0);

  // to check whether the timer is running or not
  let [isRunning, setIsRunning] = useState(false);

  // to store the interval id that should not re-render my component but my updated value should be persist

  let timerRef = useRef();

  let startTimer = (event => {
    //if the timer is already started then do not start the timer again 
    
    if(!isRunning){
        // then only allow to start the timer 
        setIsRunning(true);  //because now timer is started 

        //then to start the timer I have to use setInterval 

        timerRef.current = setInterval(() => {

            setTime((previousTime) => {
                return previousTime+1;
            });

        } , 1);

    }
  });


  let stopTimer = (event => {
        //allow the user when timer is start then only allow to stop the timer 
        if(isRunning){
            // means the timer is running
            setIsRunning(false);

            clearInterval(timerRef.current);

        }
  });


  let resetTimer = (event => {
        //no matter what I should clear the interval and make the timer to the 0 
        clearInterval(timerRef.current);
        setTime(0);
        setIsRunning(false);
  });


//   !creating the function to display the timer in the format hours:min:seconds

  let formatTime = () => {

    //it will return the jsx
    //^I need to get the value of seconds , minutes and hours 

    let getSeconds = `0${time % 60}`.slice(-2);    //means give me the last two digits only 

    let minutes = `${Math.floor(time / 60)}`
    let getMinutes = `0${minutes % 60}`.slice(-2);

    let getHours = `0${Math.floor(time / 3600)}`.slice(-2);  //in 1 hour 3600 many seconds are there 

    return `${getHours} HR : ${getMinutes} MIN : ${getSeconds} SEC`;
  }



  return (
    <div>
      <h1>Time : {formatTime()}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
