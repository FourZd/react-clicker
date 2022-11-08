import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { increaseMoney } from '../../store/reducers/values/moneySlice'

export default function ActivityButton(props) {
    const [disabled, setDisabled] = useState(props.disabled)
    const dispatch = useDispatch()
    
    const buttonCooldown = () => {
        setDisabled(true)
        
        setTimeout(() => {
            setDisabled(false)
            dispatch(increaseMoney(props.income))
        }, props.duration)
        
    }
    return (
        <button disabled={disabled} onClick={() => {buttonCooldown()}}>Publicate</button>
    )
}
