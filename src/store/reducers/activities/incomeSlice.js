import { createSlice } from "@reduxjs/toolkit"

const activityIncomeSlice = createSlice({
    name: 'activityIncome',
    initialState: {
        tgChannel: 1,
        ytChannel: 10,
        newsWebsite: 100,
        radioStation: 1000,
        talkShow: 10000,
        tvChannel: 100000,
        politicalParty: 1000000,
        secretSociety: 10000000,
        privateIsland: 100000000,
        bananaRepublic: 1000000000,
        orbitalLoudspeaker: 10000000000,
        reptiloidConsilium: 100000000000
    },
    reducers: {
        increaseSingleMultiplier(state, action) {
            state[action.payload[0]] *= action.payload[1]
        },

        increaseAllMultipliers(state, action) {
            Object.keys(state).forEach((value) => value*action.payload)
        }
    }
})

export const multiplierSelector = (state) => state.activityIncome
export const {increaseSingleMultiplier, increaseAllMultipliers} = activityIncomeSlice.actions
export default activityIncomeSlice.reducer