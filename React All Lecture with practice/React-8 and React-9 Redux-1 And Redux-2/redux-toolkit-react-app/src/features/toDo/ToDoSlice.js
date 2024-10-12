import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
    name:"todo",
    initialState:{
        value:"",
        toDoList:[]
    },

    reducers:{
        add:((state , action) => {

            // !here I do not have to spread the list then add current value and then change the state it will handled by the redux itself 
            // I have to just push it 
            if(state.value){
                state.toDoList.push(state.value);

                //then I have to again make the as amn empty string 
                state.value = "";
            }

            
        }),
        remove:((state , action) => {
            // console.log("romove it");
            console.log("action.payload" , action.payload);
            console.log("action" , action);
            
            
            
            let filteredList = state.toDoList.filter((currentTask , currentIndex) => {
                if(currentIndex === action.payload){
                    //then I want to remove that task from the list 
                    return false;
                }
                else{
                    return true;
                }
            })


            // Instead of directly mutating the array, return a new state object
            return {
                ...state, 
                toDoList: filteredList   //!this new value will be override because ion redux we cannot directlly change the state 
            };
        }),
        changeInputValue:((state , action) => {
            state.value = action.payload;
        })
    }
});

export default ToDoSlice;