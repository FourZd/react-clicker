import { createSlice } from "@reduxjs/toolkit"


const offcanvasSlice = createSlice({
    name: 'offcanvas',
    initialState: {
        activeMenu: null
    },
    reducers: {
        changeActiveMenu(state, action) {
            state.activeMenu = action.payload
        },
    }
})

const offcanvasSelector = state => state.offcanvas.activeMenu

export const {changeActiveMenu} = offcanvasSlice.actions
export {offcanvasSelector}
export default offcanvasSlice.reducer