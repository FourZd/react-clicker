import { createSlice } from "@reduxjs/toolkit"


const moneySlice = createSlice({
    name: 'money',
    initialState: {
        value: 0,
    },
    reducers: {
        increaseMoney(state, action) {
            state.value += action.payload

        },
        decreaseMoney(state, action) {
            state.value -= action.payload
        }
    }
})

const moneySelector = state => state.money.value

export const {increaseMoney, decreaseMoney} = moneySlice.actions
export {moneySelector}
export default moneySlice.reducer