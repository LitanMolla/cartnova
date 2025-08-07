import { createSlice } from '@reduxjs/toolkit'

export const adToCartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
    },
    reducers: {
        addtocart: (state, action) => {
            let datacheck = state.value.find((item) => item.id === action.payload.id);
            if (datacheck) {
                datacheck.quantity++;
            } else {
                state.value.push({ ...action.payload, quantity: 1 })
            }
        },
        removecartitem: (state, action) => {
            state.value.map((item, index) => {
                if (item.id === action.payload.id) {
                    state.value.splice(index, 1)
                }
            })
        },
        increaseQuantity: (state, action) => {
            state.value.find((item) => {
                if (item.id === action.payload.id) {
                    item.quantity++
                }
            })
        },
        decreaseQuantity: (state, action) => {
            state.value.find((item) => {
                if (item.id === action.payload.id) {
                    item.quantity > 1 ? item.quantity-- : ''
                }
            })
        },
    },
})

export const { addtocart, removecartitem, increaseQuantity, decreaseQuantity } = adToCartSlice.actions

export default adToCartSlice.reducer