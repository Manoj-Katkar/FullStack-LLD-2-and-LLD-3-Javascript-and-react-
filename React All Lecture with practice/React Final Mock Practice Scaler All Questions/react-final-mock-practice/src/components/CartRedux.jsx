import React, { useEffect } from 'react'
import cartSlice from '../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import axios from 'axios';

const actions = cartSlice.actions;

const CartRedux = () => {

    // I have to access the state 
    const {cartList , couponCode} = useSelector((store) => store.cartState);

    // then to call the reducers from that slice I have to use the dispatch functions for that 
    let dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`).then((response) => {
            dispatch(actions.AddToCart(response.data));
        })
        .catch((error) => {
            console.log(error);
            
        })

    } , [dispatch])

    console.log(cartList);
    


  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>image</th>
                    <th>title</th>
                    <th>price</th>
                    <th>category</th>
                </tr>
            </thead>

            <tbody>
                    {cartList.length > 0 ? <>
                        {cartList.map((currentProduct , index) => {
                    return (
                        <tr key={index}>
                            <td>{currentProduct.id}</td>
                            <td><img src={currentProduct.image} alt="" className='table-image'/></td>
                            <td>{currentProduct.title}</td>
                            <td>{currentProduct.price}</td>
                            <td>{currentProduct.category}</td>
                        </tr>
                    )
                })}
                    </> : 
                    <>Loading...............</>}
            </tbody>
        </table>
    </div>
  )
}

export default CartRedux