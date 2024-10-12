import React, { useRef } from 'react'

const FocusInput = () => {

    let inputRef  = useRef();

    let handleClick = (event) => {
        // means border will get highlighted 
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red"

        console.log(inputRef);  //it is going to be the object 
        
    }

    

  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default FocusInput