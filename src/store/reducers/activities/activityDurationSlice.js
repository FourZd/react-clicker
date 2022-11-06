import { createSlice } from "@reduxjs/toolkit"

const activityDurationSlice = createSlice({
    name: 'activityDuration',
    initialState: { // in MS
        tgChannel: 3000, // 3 sec
        ytChannel: 6000, // 6 sec
        newsWebsite: 12000, // 12 sec
        radioStation: 24000, // 24 sec
        talkShow: 48000, // 48 sec
        tvChannel: 96000, // 1:36 min
        politicalParty: 192000, // 3:12 min
        secretSociety: 384000, // 6:24 min
        privateIsland: 768000, // 12:48 min
        bananaRepublic: 1536000, // 25:36 min
        orbitalLoudspeaker: 3072000, // 51:12 min
        reptiloidConsilium: 6144000 // 1:42:24 hours
    },
    reducers: {
        decreaseSingleDuration(state, action) {
            console.log('Duration decreased')
            state[action.payload.activityName] *= action.payload.effect
        },

        decreaseAllDuration(state, action) {
            console.log('Duration ALL decreased')
            Object.keys(state).forEach((value) => value*action.payload)
        }
    }
})

export const durationSelector = (state) => state.activityDurationMultiplier
export const {increaseSingleMultiplier, increaseAllMultipliers} = activityDurationSlice.actions
export default activityDurationSlice.reducer