import { configureStore } from '@reduxjs/toolkit'
import moneySlice from './reducers/moneySlice'

export const store = configureStore({
  reducer: {
    money: moneySlice
  }
})
