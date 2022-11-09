import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCooldown, setCooldown } from '../../store/reducers/activities/activityCooldownSlice'
import { quantitySelector } from '../../store/reducers/activities/activityQuantitySlice'
import { increaseMoney } from '../../store/reducers/values/moneySlice'
import './Activities.css'
export default function ActivityButton(props) {
    const [isTimedOut, setTimeOut] = useState(false)
    const available = useSelector(quantitySelector).find(activity => activity.id === props.id).quantity

    const dispatch = useDispatch()

    const buttonCooldown = () => {
        setTimeOut(true)
        dispatch(setCooldown(props.id))
        props.setCooldown(true)
        
        setTimeout(() => {
            setTimeOut(false)
            props.setCooldown(false)
            dispatch(removeCooldown(props.id))
            dispatch(increaseMoney(props.income))
        }, props.duration)
    }
    return (
        <button className='activity-button' disabled={isTimedOut || !available} onClick={() => {buttonCooldown()}}>Publicate</button>
    )
}
