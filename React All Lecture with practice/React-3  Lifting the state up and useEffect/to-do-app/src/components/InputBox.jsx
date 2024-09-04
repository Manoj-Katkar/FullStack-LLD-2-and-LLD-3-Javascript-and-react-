import React from 'react'

const InputBox = () => {
    let {addTask} = props;
    const handleInput = (e) => {
      // Add code here
      addTask(e);
  
    };
    const addTaskChild = () => {
      // Add code here
  
    };
    return (
      <div className="inputbox">
        <input type="text" />
  
        <button onClick={addTaskChild}>Add Task</button>
      </div>
    );
}

export default InputBox