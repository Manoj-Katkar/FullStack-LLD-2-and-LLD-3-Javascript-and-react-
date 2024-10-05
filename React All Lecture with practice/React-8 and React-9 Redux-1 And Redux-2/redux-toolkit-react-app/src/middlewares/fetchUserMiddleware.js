import userSlice from "../features/user/userSlice"

const actions = userSlice.actions;

const fetchUserMiddleware = (param) => {

    // it will return the async function which will have the value of the dispatch 

    return async (dispatch) => {   //!it will automatically have dispatch 
        try{
            
            //just before making the API call I have to make sure that loading is true because till I am getting the data I will show loading in the UI 

            dispatch(actions.userLoading());


            //!now I have to make the API call 


            let dataFromServerResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);

            
            // !very Imp property while getting the data from any api or server 
            //^ dataFromServerResponse.ok = it will be true when I will get the data from the server successfully 
            //^ !dataFromServerResponse.ok = now I used the negation means when the I will not get the response then I willmake it is as true using negation to apply some check what to do if I will not get the response throw the new Error 

            if(!dataFromServerResponse.ok){

                //then I will trow the new Error 
                throw new Error('Failed to fetch user data')   //*here throwing the new error if because suppose if because of network issue or wrong url I am not able to make the API call 

            }



            let userConvertedData = await dataFromServerResponse.json();


            // now I have to update the userData state using the dispatch 

            dispatch(actions.userData(userConvertedData));













        }
        catch(error){

            dispatch(actions.userError());
        }
    }

}

export default fetchUserMiddleware