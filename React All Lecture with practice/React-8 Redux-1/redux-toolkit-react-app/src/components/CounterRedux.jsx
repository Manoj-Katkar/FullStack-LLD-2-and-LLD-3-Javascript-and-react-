import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store/store'
import counterSlice from '../features/counter/counterSlice'

// importing the all the actions of that particular Slice 

const actions = counterSlice.actions;

const CounterRedux = () => {

    //! I will take the state from the redux and also update the state and also give the functionality using the slices inside that mension the reducers 

  //  ^using the useSelector(store) I will access the state value from the store that will go inside that Slice and provide me that value 

  // useSelector(store) :  
                          // i)it will take the argument store 
                          // ii)now from that store I have to access the that Slice and from that Slice I will get the state value (redux internally will handle this things)

  let count = useSelector(store => {return store.counterState.count});  //!this is how we can read the global state created for the counter 


  // !now to pass the action then I have to use the dispatch function that I will get it from the useDispath() hook 

  let dispatch = useDispatch();

  console.log("dispatch function  ", dispatch);



  

    let IncrementCounter = (event) => {

      // !Now I am dispatching with the help of the actions in function I can pass the parameters also that will be taken as the payload 
      dispatch(actions.increment(10));


    }

    let DecrementCounter = (event) => {
      
      // !Now I am dispatching with the help of the actions in function I can pass the parameters also that will be taken as the payload 
      dispatch(actions.decrement(10));
    }



  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={IncrementCounter}>Increment</button>
       
        <button onClick={DecrementCounter}>Decrement</button>
    </div>
  )
}

export default CounterRedux