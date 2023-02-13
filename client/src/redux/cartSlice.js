import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    loading: false,
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

export const { setCart} = authSlice.actions
export default authSlice.reducer