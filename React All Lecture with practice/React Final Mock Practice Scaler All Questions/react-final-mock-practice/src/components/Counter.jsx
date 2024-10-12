import React from 'react'

const Counter = (props) => {
    let {text , count} = props;

    console.log("Counter for " + text);
    
  return (
    <div>
        <h2>{text} : {count}</h2>
    </div>
  )
}

export default React.memo(Counter)