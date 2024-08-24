import React, { useEffect, useState } from 'react'

const Profile = () => {
    // Problem statement : on the load of the Profile component in the UI I have to render the user profile into the UI by making some backend call 

    // !So which useEffect() Type you will use it 
    // !My approach I will use the useEffect() hook with the( empty dependacy array) because it will get rendered at once only in the UI 

    // first create the one state 
    const[data , setData] = useState(null);

    // ^lets make one async function because I need to handle the promises in sync manner to get resolved 
    const fetchData = async () => {
        const dataFromServer = await fetch("https://jsonplaceholder.typicode.com/users");
        //now I have to convert it into the javascript format 
        let convertedData = await dataFromServer.json();

        console.log(convertedData);

        //then I have to set the above data to the actual data state 
        setData(convertedData);

    }


    // then I will create the useEffect() hook with empty array 
    useEffect(() => {
        //here I have to fetch data 
        fetchData()
    } , [])


  return (
    <div>
        {/* here I will write the condition based on the ternery operator  */}
        {data ? <span>Data loaded succesfully</span> : <span>Loading......</span>}
    </div>
  )
}

export default Profile