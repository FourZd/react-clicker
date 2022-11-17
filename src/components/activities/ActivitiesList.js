import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {activityIncomeMultiplierSelector} from '../../store/reducers/activities/activityIncomeMultiplierSlice'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice'
import { quantitySelector } from '../../store/reducers/activities/activityQuantitySlice'
import Activity from './Activity'
import '../../main.css'
import {activityGenerator} from './ActivitiesData'

export default function ActivitiesList() {
    const multiplierSelect = useSelector(activityIncomeMultiplierSelector)
    const durationSelect = useSelector(durationSelector)
    const quantitySelect = useSelector(quantitySelector)

    /*          unite later          */
    const getActivityMultiplier = (id) => {
        const target = multiplierSelect.find(activity => activity.id === id)
        return target.multiplier
    } 

    const getActivityDuration = (id) => {
        const target = durationSelect.find(activity => activity.id === id)
        return target.duration
    } 

    const getActivityQuantity = (id) => {
        const target = quantitySelect.find(activity => activity.id === id)
        return target.quantity
    } 
    /* -----------------------------*/
    
    const [activityList, setActivityList] = useState(activityGenerator.getActivityList(
        getActivityMultiplier, 
        getActivityDuration, 
        getActivityQuantity
        ))

    const changeActivityState = (id, state) => {
        const updatedActivityList = activityList.map(activity => {
            const newActivity = activity
            newActivity.cooldown = state
            if (activity.id === id) {
                console.log(newActivity.cooldown)
                return newActivity
            } else {
                return activity
            }
        }) 
        setActivityList(updatedActivityList)

    }
    return (
        activityList.map(activity => {
            return (
                <Activity 
                    key = {activity.id}
                    activity = {activity}
                />
                )
            }
        )
    )
}
