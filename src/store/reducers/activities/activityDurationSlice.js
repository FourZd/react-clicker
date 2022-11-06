import { createSlice } from "@reduxjs/toolkit"

const activityDurationSlice = createSlice({
    name: 'activityDuration',
    initialState: { // in MS
        tgChannel: 3000,
        ytChannel: 6000,
        newsWebsite: 12000,
        radioStation: 24000,
        talkShow: 48000,
        tvChannel: 96000,
        politicalParty: 192000,
        secretSociety: 384000,
        privateIsland: 768000,
        bananaRepublic: 1536000,
        orbitalLoudspeaker: 3072000,
        reptiloidConsilium: 6144000
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