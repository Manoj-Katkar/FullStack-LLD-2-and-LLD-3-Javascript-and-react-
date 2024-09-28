import React, { useState }  from 'react'
import InputBox from './InputBox';
import List from './List';

const ToDo = () => {
    const [tasksArr, setTasks] = useState([]);
    const addTask = (inputValue) => {
      // Complete the function
      setTasks([...tasksArr , inputValue]);
    };
  
    const handleDelete = (idx) => {
      // Complete the function
      // Approach I have to iterate over the tasksArray and for that matching index I have to remove that task using the splice method 
          let newUpdatedFilteredTaskArray = tasksArr.filter((currentTask , currentIndex) => {
            if(currentIndex === idx){
              //then I do not want that element in the my filtered array so i will return the false 
              return false;
            }
            else{
              return true;
            }
          });

        //then I have to update the state 
        setTasks(newUpdatedFilteredTaskArray);
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