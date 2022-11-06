import { configureStore } from '@reduxjs/toolkit'
import activityDurationSlice from './reducers/activities/activityDurationSlice'
import incomeSlice from './reducers/activities/incomeSlice'
import moneySlice from './reducers/values/moneySlice'

export const store = configureStore({
  reducer: {
    money: moneySlice,
    activityIncome: incomeSlice,
    activityDurationMultiplier: activityDurationSlice
  }
})
