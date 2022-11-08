import { createSlice } from "@reduxjs/toolkit"

const activityQuantitySlice = createSlice({
    name: 'activityQuantity',
    initialState: [
        {id: 1, quantity: 1},
        {id: 2, quantity: 0},
        {id: 3, quantity: 0},
        {id: 4, quantity: 0},
        {id: 5, quantity: 0},
        {id: 6, quantity: 0},
        {id: 7, quantity: 0},
        {id: 8, quantity: 0},
        {id: 9, quantity: 0},
        {id: 10, quantity: 0},
        {id: 11, quantity: 0}, 
        {id: 12, quantity: 0}
    ],

    reducers: {
        buyOneActivity(state, action) {
            console.log(action.payload)
            let target = state.find(activity => activity.id === action.payload)
            target.quantity += 1
        },
    }
})

export const quantitySelector = (state) => state.activityQuantity
export const {buyOneActivity} = activityQuantitySlice.actions
export default activityQuantitySlice.reducer
