import { configureStore } from '@reduxjs/toolkit'

import moneySlice from './reducers/values/moneySlice'
import activityIncomeMultiplierSlice from './reducers/activities/activityIncomeMultiplierSlice'
import activityQuantitySlice from './reducers/activities/activityQuantitySlice'
import activityDurationSlice from './reducers/activities/activityDurationSlice'

export const store = configureStore({
  reducer: {
    money: moneySlice,
    activityIncome: activityIncomeMultiplierSlice,
    activityQuantity: activityQuantitySlice,
    activityDurationMultiplier: activityDurationSlice,
  }
})
