import React from 'react'

const ConditionalRendering = ({isLoggedIn , userName}) => {
    console.log(isLoggedIn);
    console.log(userName);

    // !below is also the correct way to give the login right to  the user using if else but also using the ternary operator also we can able to achieve in one line 

    // if(isLoggedIn === true){
    //     return (
    //         <div>{`Welcome to the website ${userName}`}</div>
    //       )
    // }
    // else{
    //     return (
    //         <div>{`Please Sign Up first`}</div>
            
    //     )
    // }



    // !using ternary operator also we can able to achieve in one line 

    return (
        <div>
            {
                isLoggedIn ? (<h1>{`Welcome to the website ${userName}`}</h1>) : (<h1>{`Please Sign Up first`}</h1>)
            }
        </div>
    )


    

}

export default ConditionalRendering