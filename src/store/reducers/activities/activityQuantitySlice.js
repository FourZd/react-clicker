import { createSlice } from "@reduxjs/toolkit"

const activityQuantitySlice = createSlice({
    name: 'activityQuantity',
    initialState: { 
        tgChannel: 1, 
        ytChannel: 0, 
        newsWebsite: 0, 
        radioStation: 0, 
        talkShow: 0, 
        tvChannel: 0, 
        politicalParty: 0, 
        secretSociety: 0,
        privateIsland: 0,
        bananaRepublic: 0, 
        orbitalLoudspeaker: 0, 
        reptiloidConsilium: 0 
    },

    reducers: {
        buyOneActivity(state, action) {
            state[action.payload] += 1
        },
    }
})

export const quantitySelector = (state) => state.activityQuantity
export const {buyOneActivity} = activityQuantitySlice.actions
export default activityQuantitySlice.reducer
