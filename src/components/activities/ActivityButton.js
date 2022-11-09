import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quantitySelector } from '../../store/reducers/activities/activityQuantitySlice'
import { increaseMoney } from '../../store/reducers/values/moneySlice'
import './Activities.css'
export default function ActivityButton(props) {
    const [isTimedOut, setTimeOut] = useState(false)
    const available = useSelector(quantitySelector).find(activity => activity.id === props.id).quantity

    const dispatch = useDispatch()

    const buttonCooldown = () => {
        setTimeOut(true)
        props.startCooldown(props.id)
        
        setTimeout(() => {
            props.finishCooldown(props.id)
            setTimeOut(false)
            dispatch(increaseMoney(props.income))
        }, props.duration)
    }
    return (
        <button className='activity-button' disabled={isTimedOut || !available} onClick={() => {buttonCooldown()}}>Publicate</button>
    )
}
