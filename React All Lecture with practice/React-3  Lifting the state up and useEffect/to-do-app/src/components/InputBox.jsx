import React, { useState } from 'react'

const InputBox = (props) => {
    let {addTask} = props;

      // lets take the one state to store the current task entered by the user 
      let [currentTask , setCurrentTask] = useState("");

      const handleInput = (e) => {
        // Add code here
        setCurrentTask(e.target.value);

      };
      const addTaskChild = () => {
        // Add code here
        addTask(currentTask);

        //also I have to make the state value as the empty again 
        setCurrentTask("");
      };


    return (
      <div className="inputbox">
        <input type="text" value={currentTask} onChange={handleInput}/>
  
        <button onClick={addTaskChild}>Add Task</button>
      </div>
    );
}

export default InputBox