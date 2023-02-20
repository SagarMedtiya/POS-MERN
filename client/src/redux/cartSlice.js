import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    cartItems: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        setCart:(state, action)=>{
            const { cartItems } = action.payload;
            state.cartItems = cartItems;
        }
    }
})


export const { setCart} = cartSlice.actions

export default cartSlice.reducer