import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {
    const [ data , setData] = useState([]);


    useEffect(() => {
        axios.get(`${url}`).then((response => {
            console.log(response);
            setData(response.data);
        }))
        .catch((error) => {
            console.log(error);
            
        })
    } , [])


    return data;


}

export default useFetchData