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
                        key = {props.activity.id}
                        income = {props.activity.income}
                        available = {!!props.activity.quantity}
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
