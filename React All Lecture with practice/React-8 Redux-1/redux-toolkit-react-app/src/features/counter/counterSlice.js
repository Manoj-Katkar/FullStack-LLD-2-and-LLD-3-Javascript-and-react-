import {createSlice} from "@reduxjs/toolkit"

// !to create the Slice we have to use the createSlice method that is present inside the "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:"counterSlice",

    // ^initialState can be anything likle how we were creating the differant data type state in useState() hook like number , string , object , array anything we can give for the initialState but function is not allowed to pass as the initialState value 
    // ^all the keys name should be same like name , initialState 

    initialState:{
        count:0
    },

    // ^reducers contain the all the buissness logic 
    reducers:{
        increment:((state , action) => {
            console.log("payload : " , action);

            // !here the actionis object inside that key is payload where the  data that is passed it is getting recived 
            // https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow (refer this link to understand the flow in better way )
            state.count = state.count + action.payload;
        }),

        decrement:((state , action) => {
            state.count = state.count - action.payload;
        })
    }


});


export default counterSlice;