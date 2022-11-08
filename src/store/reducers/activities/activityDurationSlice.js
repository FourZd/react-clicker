import { createSlice } from "@reduxjs/toolkit"

const activityDurationSlice = createSlice({
    name: 'activityDuration',
    initialState: [ // in MS
        {id: 1, duration: 3000}, // 3 sec
        {id: 2, duration: 6000}, // 6 sec
        {id: 3, duration: 12000}, // 12 sec
        {id: 4, duration: 24000}, // 24 sec
        {id: 5, duration: 48000}, // 48 sec
        {id: 6, duration: 96000}, // 1:36 min
        {id: 7, duration: 192000}, // 3:12 min
        {id: 8, duration: 384000}, // 6:24 min
        {id: 9, duration: 768000}, // 12:48 min
        {id: 10, duration: 1536000}, // 25:36 min
        {id: 11, duration: 3072000}, // 51:12 min
        {id: 12, duration: 6144000} // 1:42:24 hours
    ],
    reducers: {
        decreaseSingleDuration(state, action) {
            console.log(action.payload)
            let target = state.find(activity => activity.id === action.payload.id)
            target.duration *= action.payload.effect
        },
    }
})

export const durationSelector = (state) => state.activityDurationMultiplier
export const {increaseSingleMultiplier, increaseAllMultipliers} = activityDurationSlice.actions
export default activityDurationSlice.reducer