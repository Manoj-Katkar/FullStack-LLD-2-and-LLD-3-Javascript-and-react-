import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name:"user-slice",
    initialState : {
        user:null,
        error:false,
        loading:true,
        param:null
    },
    reducers:{

        // if I am starting my loading 
        userLoading: ((state , action) => {
            state.user = null;
            state.error = false;
            state.loading = true;

        }) ,

        // now error reducer 
        userError : ((state , action) => {
            state.error = true;
            state.loading = false
            state.user = null;   //there will be no user when I will get the error 
        }),

        // now for setting the userData reducer 
        userData : ((state , action) => {
            state.error = false;
            state.loading = false;
            state.user = action.payload;
        }),

        // now reducer to set the param value which is taken by the user 
        setParam : ((state , action) => {
            state.param = action.payload
        })

    }
})

export default userSlice