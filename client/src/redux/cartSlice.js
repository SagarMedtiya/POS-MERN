import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    loading: false,
    cartItems: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
})