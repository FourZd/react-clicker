import React from 'react'
import './Activities.css'

import ActivityBuy from './ActivityBuy'
import ActivityButton from './ActivityButton'

import { moneySelector } from '../../store/reducers/values/moneySlice'
import { useSelector } from 'react-redux'
import { quantitySelector } from '../../store/reducers/activities/activityQuantitySlice'

export default function Activity(props) {
    const money = useSelector(moneySelector)

    return (
        props.activitiesList.map(activity => {
            return (
                <section className='activity-block'>
                    <h3>{activity.name}</h3> 
                    <ActivityButton 
                        name = {activity.name}
                        income = {activity.income}
                        duration = {activity.duration}
                        quantity = {activity.quantity}

                    />
                    <h3>{activity.price}$</h3>
                    <ActivityBuy  // Buy one
                        disabled = {money >= activity.price ? false : true}
                        quantity = {1}
                        price = {activity.price}
                        name = {activity.name}

                    />
                    <h4>{activity.quantity}</h4>
                </section>
            )
        })
    )
}


/* Post something h1 should dissapear after the first click */