import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name:"Cart-Slice",
    initialState:{
        cartList:[],
        couponCode:""
    },

    reducers:{
        // AddToCart, Remove from Cart, Update Quantity, Apply Coupon Code.
        AddToCart:((state , action) => {

            return{
                ...state,
                // cartList:[...state.cartList , action.payload]
                cartList:action.payload

            }

        }),
        RemoveFromCart:((state , action) => {
            // we will remove the cart using the index that will get passed from the user in action.payload
            //here I have to use the filter method

            let filteredList = state.cartList.filter((currentCart , currentIndex) => {
                if(currentIndex === action.payload){
                    // then I do not want that cart in my filtered list 
                    return false;
                }
                else{
                    return true;
                }
            })

            // then I have to update the state 
            return{
                ...state,
                cartList:filteredList
            }
        }),
        ApplyCouponCode:((state , action) => {
            
            return{
                ...state,
                couponCode:`${action.payload}`
            }
        }),
        UpdateQuantity:((state , action) => {

            let {id , quantity} = action.payload;

            let newUpdatedQuantityList = state.cartList.map((currentCart , currentIndex) => {
                if(currentCart.id === id){
                    // then for that object I have to update the quantity 
                    return {
                        ...currentCart,
                        quantity
                    }
                }

                // and if particular cart quantity we are not changing then simply return that 
                return item;
            })

            // then Update the state 

            return{
                ...state,
                cartList:newUpdatedQuantityList
            }

        })
    }

})

export default cartSlice