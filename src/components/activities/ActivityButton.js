import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quantitySelector } from '../../store/reducers/activities/activityQuantitySlice'
import { increaseMoney } from '../../store/reducers/values/moneySlice'

export default function ActivityButton(props) {
    const [timeOut, setTimeOut] = useState(false)

    const available = useSelector(quantitySelector)[props.name]
    const dispatch = useDispatch()
    const buttonCooldown = () => {
        setTimeOut(true)
        
        setTimeout(() => {
            setTimeOut(false)
            dispatch(increaseMoney(props.income))
        }, props.duration)
        
    }
    return (
        <button disabled={timeOut || !available} onClick={() => {buttonCooldown()}}>Publicate</button>
    )
}
