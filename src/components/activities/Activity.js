import React, { useState, Fragment } from 'react'
import './Activities.css'

import ActivityBuy from './ActivityBuy'
import ActivityButton from './ActivityButton'
import ActivityProgression from './ActivityProgression'
import { moneySelector } from '../../store/reducers/values/moneySlice'
import { useSelector } from 'react-redux'
import { activityImages } from './ActivityImages'

export default function Activity(props) {
    const money = useSelector(moneySelector)
    const [cooldown, setCooldown] = useState()
    const startCooldown = (state) => {
        setCooldown(state)
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
                                cooldown = {cooldown}
                            />
                        </h3>
                        
                        <ActivityButton 
                            id = {activity.id}
                            income = {activity.income}
                            duration = {activity.duration}
                            quantity = {activity.quantity}
                            setCooldown = {startCooldown}
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