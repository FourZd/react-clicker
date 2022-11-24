import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { finishCooldown, startCooldown } from '../../store/reducers/activities/activityCooldownSlice'
import { quantitySelector } from '../../store/reducers/activities/activityQuantitySlice'
import { increaseMoney } from '../../store/reducers/values/moneySlice'
import './Activities.css'
import useSound from 'use-sound';

import click1 from './ActivitiesClickSound/click1.mp3'

export default function ActivityButton(props) {
    const [isTimedOut, setTimeOut] = useState(false)
    const available = useSelector(quantitySelector).find(activity => activity.id === props.id).quantity
    const dispatch = useDispatch()
    const [play] = useSound(click1)

    const buttonCooldown = () => {
        play()
        

        setTimeOut((isTimedOut) => !isTimedOut)
        dispatch(startCooldown(props.id))
        
        setTimeout(() => {
            dispatch(finishCooldown(props.id))
            setTimeOut((isTimedOut) => !isTimedOut)
            dispatch(increaseMoney(props.income))
        }, props.duration)
    }
    return (
        <button className='activity-button' disabled={isTimedOut || !available} onClick={() => {buttonCooldown()}}>Publicate</button>
    )
}
