import { createSlice } from '@reduxjs/toolkit'

export const adToCartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
    },
    reducers: {
        addtocart: (state, action) => {
            console.log(state.value)
            console.log(action.payload)
            let datacheck = state.value.find((item) => item.id === action.payload.id);
            if (datacheck) {
                datacheck.quantity++;
            } else {
                state.value.push({...action.payload,quantity:1})
            }
        },
    },
})

export const { addtocart } = adToCartSlice.actions

export default adToCartSlice.reducer