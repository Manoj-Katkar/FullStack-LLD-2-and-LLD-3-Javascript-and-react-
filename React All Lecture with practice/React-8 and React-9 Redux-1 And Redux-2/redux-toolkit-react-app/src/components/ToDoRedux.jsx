import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../store/store';
import ToDoSlice from '../features/toDo/ToDoSlice';

// first I have to import the all the actions from the toDoSlice

let actions = ToDoSlice.actions;


const ToDoRedux = () => {

    // reading the value from the global state using the store 
    // my toDoSlice state is object so here I need the two stated So I have to do the object destructuring 

    let {value , toDoList} = useSelector((store) => {

        //this will return the entire state object itself 
        return store.toDoState;
    });


    // !I have to also create the dispatch function 

    let dispatch = useDispatch();


    let addTaskToList = (event) => {
        //Approach 
        // I have to add the task then again I have to make the value as the empty string so next time user will enter the new value in the text input 

        dispatch(actions.add());

    }

    let handleDelete = ( index  , event) => {
        dispatch(actions.remove(index))
    }


    let handleChange = (event) => {
        // now change the data using the dispatch 
        dispatch(actions.changeInputValue(event.target.value))
    }

    return (
        <>
          <h2 className="todo-title">ToDo App Using Redux in React</h2>

          <div className="todo-container">

            <div className="input-container">
              <input 
                type="text" 
                value={value} 
                onChange={handleChange} 
                className="todo-input" 
                placeholder="Enter your task"
              />
              <button onClick={addTaskToList} className="add-task-btn">Add Task</button>

            </div>


            <div className="tasks-container">

              <ul className="tasks-list">
                {toDoList.map((currentTask, index) => {
                  return (
                    <li key={index} className="task-item">
                      <span>{currentTask}</span>
                      <button className="delete-task-btn" onClick={() => {
                        // console.log("handle delete index : " , index);
                        
                        handleDelete(index);
                      }}>Delete</button>
                    </li>
                  );
                })}
              </ul>

            </div>
          </div>
        </>
      );
}

export default ToDoRedux