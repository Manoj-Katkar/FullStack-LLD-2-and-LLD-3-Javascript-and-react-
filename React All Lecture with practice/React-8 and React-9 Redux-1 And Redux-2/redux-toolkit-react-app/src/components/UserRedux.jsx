import React, { useEffect, useState } from 'react'
import userSlice from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store/store';
import fetchUserMiddleware from '../middlewares/fetchUserMiddleware';


// Now I have to import the all the actions from the userSlice

let actions = userSlice.actions;

const UserRedux = () => {

    // !=======================================Now I have to convert the below code into the redux =============================

    // !then below code that I have commented that is for referance how I have converted the normal code into redux and main impure async function into middleware 

    /*
    
    // here we are going to use one api to get the data : data is about the users that I have to render in the UI 

    let [user , setUser] = useState(null);   //*to store that particular user details in the form of the object 

    let [error , setError] = useState(false);   //to track that I got the data or error from the API 

    let [loading , setLoading] = useState(true);   //*first till I get the data from API it will be in Loading 






    // now I will take the one useEffect to fetch the user data from the API 
    // I will take the async function to fetch the data from the API 
    // I will also implement try catch in the async function where I am making the call 


    const fetchUser = async () => {
        
        try{
            // before making the API call I will setLoading to true 
            setLoading(true);


            let dataFromServerResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${1}`);


            // !very Imp property while getting the data from any api or server 
            //^ dataFromServerResponse.ok = it will be true when I will get the data from the server successfully 
            //^ !dataFromServerResponse.ok = now I used the negation means when the I will not get the response then I willmake it is as true using negation to apply some check what to do if I will not get the response throw the new Error 

            if(!dataFromServerResponse.ok){

                //then I will trow the new Error 
                throw new Error('Failed to fetch user data')   //*here throwing the new error if because suppose if because of network issue or wrong url I am not able to make the API call 

            }



            let userData = await dataFromServerResponse.json();






    
            
            console.log("dataFromServerResponse" , dataFromServerResponse);
            
            console.log("userData" , userData);


            //then I have to update the user state 
            setUser(userData);   //*updating the user State    






        }
        catch(error){
            console.log(error)
            //then Here I have to set Error as true 
            setError(true);
        }
        finally{
            
            //now ir-respective I will get the data or the error I have to make the Loading as false because in the UI loading should not shown for my current app 
            setLoading(false);
        }

        
    }

    */








    // !========================I will get the all the state from the redux store ==========================

    let {user , error , loading , param} = useSelector((store) => store.userState);

    let dispatch = useDispatch();

    // !I will take the one local state to store the value that is entered by the user in input box 

    let [inputValue , setInputValue] = useState("");

    // !implementing the handle param function 

    let handleParam = (event) => {

        // ^Now very important part how we will call the middleware function from the my component because I have to pass the param that is stored in the local state that is inputValue


        // !I have to change the param using that particular slice 
        dispatch(actions.setParam(inputValue));

    }




    useEffect(() => {

        // !here how to call the middlewares
        // !because of this it will first go to the middlewares make the api call set the user data 
        
        if(param != null){
        dispatch(fetchUserMiddleware(param));

        }


    } , [param]);



    // lets create the input box where from user will enter the param that will be userId for that particular user we will display the data 

    const heading = () => {
        return (
            <>
                <div className="container">
                    <h2 className="title">User Example</h2>
                    <input 
                        type="text" 
                        className="input-field"
                        value={inputValue}
                        onChange={(event) => {
                            setInputValue(event.target.value)
                        }}
                        placeholder='Enter User Id'
                    />
        
                    <button className="search-btn" onClick={handleParam}> 
                        Search User 
                    </button>
                </div>
            </>
        )
        
    }




    // now to return the jsx I will do the conditional rendering 
    if(loading){

        return(
            <>  
                {heading()}
                <h1>
                    Loading...........
                </h1>
            </>

        )
    }
    if(error){

        return(
            <>
                {heading()}
                <h1>
                    Error Fetching the User Data
                </h1>
            </>

        )
    }
    else{

        return(
            <>
                <div className="user-container">
                    {heading()}
                    <h2 className="user-name">Name: {user.name}</h2>
                    <br />
                    <h2 className="user-phone">Phone Number: {user.phone}</h2>
                </div>
            </>
        )
    }
}

export default UserRedux