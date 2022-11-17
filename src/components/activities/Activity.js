import React, { useState, useEffect, Fragment } from 'react'
import './Activities.css'
import ActivityBuy from './ActivityBuy'
import ActivityButton from './ActivityButton'
import ActivityProgression from './ActivityProgression'
import { moneySelector } from '../../store/reducers/values/moneySlice'
import { useSelector } from 'react-redux'
import { activityImages } from './ActivityImages'
import { cooldownSelector } from '../../store/reducers/activities/activityCooldownSlice'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice'

export default function Activity(props) {
    const money = useSelector(moneySelector)
    const [cooldownDuration, setCooldownDuration] = useState(0)

    const restartCooldown = () => {
        setCooldownDuration(targetActivity['duration'])
    }
        
    useEffect(() => {
        let interval
        if (props.activity.cooldown) {
            if (cooldownDuration > 0) {
                if (props.activity.id === 1) {
                    console.log('Activity.js state', cooldownDuration)
                }
                interval = setInterval(() => setCooldownDuration(cooldownDuration - 1000), 1000);
            } else {
                clearInterval(interval)
            }
        } else {
            setCooldownDuration(0)
        }
    });

    return (
        <li className={props.activity.quantity
            ? 'activity-block' 
            : (money > props.activity.price) 
                ? 'available-to-buy' 
                : 'disabled'}>
            <div className='inside-block'>
                <div className='activity-image'>
                    <img  src={'./img/' + activityImages.find(image => image.id === props.activity.id)['image']}/>
                    <p className='activity-quantity'>{props.activity.quantity}</p>
                </div>
                <div className='activity-info'>
                    {props.activity.name}
                    <ActivityProgression 
                        id = {props.activity.id}
                        cooldown = {cooldownDuration}
                        inCooldown = {props.activity.cooldown}
                        totalTime = {targetActivity['duration']}
                    />
                </div>
                
                <div className='activity-buttons'> 

                    <ActivityBuy  // Buy one
                        disabled = {money >= props.activity.price ? false : true}
                        quantity = {1}
                        price = {props.activity.price}
                        id = {props.activity.id}
                    />
                    <ActivityButton 
                        id = {props.activity.id}
                        income = {props.activity.income}
                        duration = {props.activity.duration}
                        quantity = {props.activity.quantity}
                        changeState = {props.changeActivityState}
                    />
                    
                    
                </div>
            </div>
        </li>
    )}
