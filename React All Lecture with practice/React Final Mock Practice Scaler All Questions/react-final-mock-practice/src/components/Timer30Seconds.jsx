import React, { useEffect, useState } from 'react'

const Timer30Seconds = () => {
    
    const [count , setCount] = useState(30);

    useEffect(() => {
        let intervalId ;
        if(count > 0){
            intervalId = setInterval(() => {
                console.log("setInterval");
                
    
                    setCount(count - 1);
                    console.log("useEffect");
    
            } , 1000);
        }

        // un-mounting 
        return (() => {
            clearInterval(intervalId);
        })
    })
  return (
    <div>Timer30Seconds : {count} </div>
  )
}

export default Timer30Seconds