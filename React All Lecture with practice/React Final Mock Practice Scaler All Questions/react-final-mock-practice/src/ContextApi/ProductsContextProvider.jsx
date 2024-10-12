import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ProductsContext from './ProductsContext';

const ProductsContextProvider = (props) => {
    const [productsData , setProductsData] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`).then((response) => {
            setProductsData(response.data);
        })
        .catch((error) => {
            console.log(error);
            
        })

    } , [])
  return (
    <ProductsContext.Provider value={{productsData , setProductsData}}>
        {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider