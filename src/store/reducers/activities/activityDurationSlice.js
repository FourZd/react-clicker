import { createSlice } from "@reduxjs/toolkit"

const activityDurationSlice = createSlice({
    name: 'activityDuration',
    initialState: {
        tgChannel: 7,
        ytChannel: 15,
        newsWebsite: 30,
        radioStation: 60,
        talkShow: 120,
        tvChannel: 240,
        politicalParty: 480,
        secretSociety: 960,
        privateIsland: 1920,
        bananaRepublic: 3840,
        orbitalLoudspeaker: 7680,
        reptiloidConsilium: 15360
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