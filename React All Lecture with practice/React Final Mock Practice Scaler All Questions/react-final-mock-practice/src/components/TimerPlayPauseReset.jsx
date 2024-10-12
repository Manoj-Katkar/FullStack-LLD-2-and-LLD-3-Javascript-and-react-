import React, { useRef, useState } from 'react'

const TimerPlayPauseReset = () => {

    const [time , setTime] = useState(0);

    const [isRunning , setIsRunning] = useState(false);

    let timerRef = useRef();   //to track the interval id 

    let playTimer = (event) => {

        // here I have to check is timer is Already running then it should not run again 
        if(!isRunning){
            //means timer is not running 
            // then I have to start the timer 
            setIsRunning(true);

            timerRef.current = setInterval(() => {
                setTime((previousTime) => previousTime + 1);
            } , 10)
        }

    }



    let pauseTimer = (event) => {

        //here I have to make sure that if timer is running 
        if(isRunning){
            // then only pause it 
            clearInterval(timerRef.current);
            setIsRunning(false);
        }
    }


    let resetTimer = (event) => {
        //no matter it is running or not running it should be reset to 0 
        clearInterval(timerRef.current);
        setTime(0);
    }

    
    let displayTime = () => {
        let getSeconds = `0${time % 60}`.slice(-2);  //means give me the last two digits only 

        let getMinutes = `${Math.floor(time / 60)}`

        let minInTwoDigit = `0${getMinutes % 60}`.slice(-2);

        let getHours = `0${Math.floor(time / 3600)}`.slice(-2); //in 1 hour 3600 many seconds are there 


        return `${getHours}Hr : ${minInTwoDigit}Min : ${getSeconds}Sec`
      
    }

  return (
    <div>
        <h1>TimerPlayPauseReset</h1>
        <h3>Time : {displayTime()}</h3>
        <button onClick={playTimer}>Play</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default TimerPlayPauseReset