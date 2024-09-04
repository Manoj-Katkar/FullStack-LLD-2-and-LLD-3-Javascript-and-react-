import React, { useState }  from 'react'
import InputBox from './InputBox';
import List from './List';

const ToDo = () => {
    const [tasksArr, setTasks] = useState([]);
    const addTask = (inputValue) => {
      // Complete the function
      setTasks(tasksArr.push(inputValue));
    };
  
    const handleDelete = (idx) => {
      // Complete the function
    };
  
    return (
      // react Fragments
      <>
        <InputBox addTask={addTask} />
        <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
      </>
    );
}

export default ToDo