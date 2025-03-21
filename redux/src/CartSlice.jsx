import { createSlice } from "@reduxjs/toolkit"

let CartSlice = createSlice({
    name: "cart",
    initialState : {
        cartitems : []
    },
    reducers:{
        additem: (state, action)=>{
            state.cartitems.push(action.payload)
        },
        clearcart: (state)=>{
            state.cartitems.length = 0
        }
    }
})
export default CartSlice.reducer 
export const {additem, clearcart} = CartSlice.actions