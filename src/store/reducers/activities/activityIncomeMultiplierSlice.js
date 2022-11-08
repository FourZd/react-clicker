import { createSlice } from "@reduxjs/toolkit"

const activityIncomeMultiplier = createSlice({
    name: 'activityIncomeMultiplier',
    initialState: [
        {id: 1, multiplier: 1},
        {id: 2, multiplier: 1},
        {id: 3, multiplier: 1},
        {id: 4, multiplier: 1},
        {id: 5, multiplier: 1},
        {id: 6, multiplier: 1},
        {id: 7, multiplier: 1},
        {id: 8, multiplier: 1},
        {id: 9, multiplier: 1},
        {id: 10, multiplier: 1},
        {id: 11, multiplier: 1},
        {id: 12, multiplier: 1}
    ],
    reducers: {
        increaseSingleMultiplier(state, action) {
            console.log(action.payload)
            let target = state.find(activity => activity.id === action.payload[0])
            state[action.payload[0]] *= action.payload[1]
        },

        increaseAllMultipliers(state, action) {
            Object.keys(state).forEach((value) => value*action.payload)
        }
    }
})

export const activityIncomeMultiplierSelector = (state) => state.activityIncome
export const {increaseSingleMultiplier, increaseAllMultipliers} = activityIncomeMultiplier.actions
export default activityIncomeMultiplier.reducer