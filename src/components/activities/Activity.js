import React, { useState, Fragment } from 'react'
import './Activities.css'
import ActivityBuy from './ActivityBuy'
import ActivityButton from './ActivityButton'
import ActivityProgression from './ActivityProgression'
import { moneySelector } from '../../store/reducers/values/moneySlice'
import { useSelector } from 'react-redux'
import { activityImages } from './ActivityImages'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice'

export default function Activity(props) {
    const totalTime = useSelector(durationSelector)
    const money = useSelector(moneySelector)
    const [cooldownDuration, setCooldownDuration] = useState()

    const toggleActivity = (id, state) => {
        const updatedActivityList = props.activitiesList.map(activity => {
            if (activity.id === id) {
                const changedState = activity
                changedState.cooldown = state
                
                return changedState
            } else return activity
        
        })
        
        props.setActivityList(updatedActivityList)
        console.log('ffffffffffff', updatedActivityList)
    }
    const startCooldown = (id) => {
        const targetActivity = totalTime.find(activity => activity.id === id)
        setCooldownDuration(targetActivity['duration'])
        toggleActivity(id, true)
    }
    const finishCooldown = (id) => {
        setCooldownDuration(0)
        toggleActivity(id, false)
    }
    return (
        props.activitiesList.map(activity => {
            return (
                <section className='activity-block'>
                    <div className='inside-block'>
                        <h4 className='activity-image'>
                            <img  src={'./img/' + activityImages.find(image => image.id === activity.id)['image']}/>
                            <p className='activity-quantity'>{activity.quantity}</p>
                        </h4>
                        <h3 className='activity-info'>
                            {activity.name}
                            <ActivityProgression 
                                id = {activity.id}
                                cooldown = {cooldownDuration}
                                inCooldown = {activity.cooldown}
                                key={activity.cooldown}
                            />
                        </h3>
                        
                        <ActivityButton 
                            id = {activity.id}
                            income = {activity.income}
                            duration = {activity.duration}
                            quantity = {activity.quantity}
                            startCooldown = {startCooldown}
                            finishCooldown = {finishCooldown}
                        />
                        
                        <ActivityBuy  // Buy one
                            disabled = {money >= activity.price ? false : true}
                            quantity = {1}
                            price = {activity.price}
                            id = {activity.id}
                        />
                        
                    </div>
                </section>
            )
        })
    )
}


/* Post something h1 should dissapear after the first click */