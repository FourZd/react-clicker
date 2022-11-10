import React, { useState, useEffect, Fragment } from 'react'
import './Activities.css'
import ActivityBuy from './ActivityBuy'
import ActivityButton from './ActivityButton'
import ActivityProgression from './ActivityProgression'
import { moneySelector } from '../../store/reducers/values/moneySlice'
import { useSelector } from 'react-redux'
import { activityImages } from './ActivityImages'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice'

export default function Activity(props) {
    const targetActivity = useSelector(durationSelector).find(activity => activity.id === props.activity.id)
    const money = useSelector(moneySelector)
    const [cooldownDuration, setCooldownDuration] = useState(0)

    const restartCooldown = () => {
        setCooldownDuration(targetActivity['duration'])
    }

    const cooldownTick = () => {
        let updatedDuration = cooldownDuration
        updatedDuration -= 1000
        setCooldownDuration(updatedDuration)
        }
        
    useEffect(() => {
        
        if (cooldownDuration > 0) {
            console.log(cooldownDuration)
            const interval = setInterval(() => setCooldownDuration(cooldownDuration - 1000), 1000);
        }
    });

    return (
        <section className='activity-block'>
            <div className='inside-block'>
                <h4 className='activity-image'>
                    <img  src={'./img/' + activityImages.find(image => image.id === props.activity.id)['image']}/>
                    <p className='activity-quantity'>{props.activity.quantity}</p>
                </h4>
                <h3 className='activity-info'>
                    {props.activity.name}
                    <ActivityProgression 
                        id = {props.activity.id}
                        cooldown = {cooldownDuration}
                        inCooldown = {props.activity.cooldown}
                    />
                </h3>
                
                <ActivityButton 
                    id = {props.activity.id}
                    income = {props.activity.income}
                    duration = {props.activity.duration}
                    quantity = {props.activity.quantity}
                    changeState = {props.changeActivityState}
                    restartCooldown = {restartCooldown}
                />
                
                <ActivityBuy  // Buy one
                    disabled = {money >= props.activity.price ? false : true}
                    quantity = {1}
                    price = {props.activity.price}
                    id = {props.activity.id}
                />
                
            </div>
        </section>
    )}
