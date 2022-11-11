import { createSlice } from "@reduxjs/toolkit"

const activityCooldownSlice = createSlice({
    name: 'cooldown',
    initialState: [
        {id: 1, cooldown: false}, 
        {id: 2, cooldown: false}, 
        {id: 3, cooldown: false}, 
        {id: 4, cooldown: false}, 
        {id: 5, cooldown: false}, 
        {id: 6, cooldown: false}, 
        {id: 7, cooldown: false}, 
        {id: 8, cooldown: false}, 
        {id: 9, cooldown: false}, 
        {id: 10, cooldown: false},
        {id: 11, cooldown: false},
        {id: 12, cooldown: false} 
    ],

    reducers: {
        startCooldown(state, action) {
            let target = state.find(activity => activity.id === action.payload)
            target['cooldown'] = true
        },
        finishCooldown(state, action) {
            let target = state.find(activity => activity.id === action.payload)
            target['cooldown'] = false
        }
    }
})

export const cooldownSelector = (state) => state.activityCooldown
export const {startCooldown, finishCooldown} = activityCooldownSlice.actions
export default activityCooldownSlice.reducer