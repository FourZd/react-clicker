import { configureStore } from '@reduxjs/toolkit'
import activityDurationSlice from './reducers/activities/activityDurationSlice'
import incomeMultiplierSlice from './reducers/activities/incomeMultiplierSlice'
import moneySlice from './reducers/values/moneySlice'

export const store = configureStore({
  reducer: {
    money: moneySlice,
    incomeMultiplier: incomeMultiplierSlice,
    activityDurationMultiplier: activityDurationSlice
  }
})
