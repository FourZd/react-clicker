import React, { useState } from 'react'
import './Activities.css'


import ActivityButton from './ActivityButton'

export default function Activity(props) {
    return (
        props.activitiesList.map(activity => {
            return (
                <section className='activity-block'>
                    <h3>{activity.name}</h3> 
                    <ActivityButton 
                        income = {activity.income}
                        duration = {activity.duration}
                    />
                </section>
            )
        })
    )
}


/* Post something h1 should dissapear after the first click */