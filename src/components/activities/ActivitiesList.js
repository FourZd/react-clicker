import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {activityIncomeMultiplierSelector} from '../../store/reducers/activities/activityIncomeMultiplierSlice'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice'
import { quantitySelector } from '../../store/reducers/activities/activityQuantitySlice'
import Activity from './Activity'
import './Activities.css'
import {activityGenerator} from './ActivitiesData'

export default function ActivitiesList() {
    const multiplierList = useSelector(activityIncomeMultiplierSelector)
    const durationList = useSelector(durationSelector)
    const quantityList = useSelector(quantitySelector)
    const [activityList, setActivityList] = useState(activityGenerator.getActivityList(multiplierList, durationList, quantityList))
    const updateActivities = () => {
        setActivityList(activityGenerator.getActivityList(multiplierList, durationList, quantityList))
    }
    return (
        <article className='activities'>
            <Activity 
                activitiesList = {activityList}
                updateActivities = {updateActivities}
            />
        </article>
    )
}
