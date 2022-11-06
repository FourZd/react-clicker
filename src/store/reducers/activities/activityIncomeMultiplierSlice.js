import { createSlice } from "@reduxjs/toolkit"

const activityIncomeMultiplier = createSlice({
    name: 'activityIncomeMultiplier',
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