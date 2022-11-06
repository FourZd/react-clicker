import { createSlice } from "@reduxjs/toolkit"

const incomeMultiplierSlice = createSlice({
    name: 'incomeMultiplier',
    initialState: {
        tgChannel: 1,
        ytChannel: 1,
        newsWebsite: 1,
        radioStation: 1,
        talkShow: 1,
        tvChannel: 1,
        politicalParty: 1,
        secretSociety: 1,
        privateIsland: 1,
        bananaRepublic: 1,
        orbitalLoudspeaker: 1,
        reptiloidConsilium: 1
    },
    reducers: {
        increaseSingleMultiplier(state, action) {
            console.log('asndj')
            state[action.payload.activityName] *= action.payload.effect
        },

        increaseAllMultipliers(state, action) {
            Object.keys(state).forEach((value) => value*action.payload)
        }
    }
})

export const multiplierSelector = (state) => state.incomeMultiplier
export const {increaseSingleMultiplier, increaseAllMultipliers} = incomeMultiplierSlice.actions
export default incomeMultiplierSlice.reducer