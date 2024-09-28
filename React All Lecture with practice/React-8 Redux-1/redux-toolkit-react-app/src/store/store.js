// !Note : For one app there will be only one store going to be there 

// ^first import the configureStore method from "@reduxjs/toolkit" which will help to create the store 

import { configureStore } from "@reduxjs/toolkit";

// ^ Now I  have to import the all the SLices 

import counterSlice from "../features/counter/counterSlice";

// ^Now I have to import the toDoSlice here 
import ToDoSlice from "../features/toDo/ToDoSlice";


// !Now lets create the store using configureStore() method which takes argument as the object only 

const store = configureStore({

    // !here I have to mension the all reducers for differant - differant Slices that I will import 
    // ^redcer is the place where we keep the all the business logic 

    reducer:{
        
        counterState:counterSlice.reducer ,   //*here I am importing the all the reducers from the counterSlice inside the one key counterState
        
        toDoState:ToDoSlice.reducer
    }
});

export default store;

