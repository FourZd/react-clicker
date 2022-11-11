import { createSlice } from "@reduxjs/toolkit"

const activityProgressionSlice = createSlice({
    name: 'activityProgression',
    initialState: [
        {id: 1, percentages: 100}, 
        {id: 2, percentages: 100}, 
        {id: 3, percentages: 100}, 
        {id: 4, percentages: 100}, 
        {id: 5, percentages: 100}, 
        {id: 6, percentages: 100}, 
        {id: 7, percentages: 100}, 
        {id: 8, percentages: 100}, 
        {id: 9, percentages: 100}, 
        {id: 10, percentages: 100},
        {id: 11, percentages: 100},
        {id: 12, percentages: 100} 
    ],
    reducers: {
        updateProgression(state, action) {
            let target = state.find(activity => activity.id === action.payload['id'])
            target.percentages = action.payload['progression']
            
        }
    }
})

export const progressionSelector = (state) => state.activityProgression
export const {updateProgression} = activityProgressionSlice.actions
export default activityProgressionSlice.reducer