import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {

    let [data, setData] = useState(null);


    let paramsObject = useParams();
    console.log(paramsObject);  //*it will have the id that is comming from the url's path params in the object form

    // so Now I have to extract the actual id from that 
    let actualId = paramsObject.id;


    console.log(actualId);


    // !implementing the fetchUserDetails function 
    const fetchUserDetails = async () => {
        const response = await fetch(`https://fakestoreapi.com/users/${actualId}`);
        const userData = await response.json();

        //the I have to store convertedResponseData somewhere so for that I will take one state 
        setData(userData);

        console.log(data);//!why null here 
        console.log(userData);


    }


    console.log(data);



    // !Now I have to extract the userdata having the above as the id form the backend 
    //so for that we will use API having the users with key as the id 
    //^So I have to use the useEffect() hook to get the data from the backend but I want at the first rendering only so I will pass second argument as the empty array 

    useEffect(() => {
        //the I will call the fetchUserDetails() function which is going to be the asynchronous 
        fetchUserDetails();

    }, [])


    return (
        <div>
            <div>
                {data ? <div>
                    <h1>User details</h1>
                    <h3>
                        {data.id} <br></br>
                        {data.address.city} <br></br>
                        {data.address.street} <br></br>
                        {data.address.number} <br></br>
                        {data.address.zipcode} <br></br>

                    </h3>
                    </div> : <div>Loading.............</div>}
            </div>
        </div>
    )
}

export default Users