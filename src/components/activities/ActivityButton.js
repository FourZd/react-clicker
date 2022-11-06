import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increaseMoney } from '../../store/reducers/values/moneySlice'

export default function ActivityButton(props) {
    const [disabled, setDisabled] = useState(false)
    const dispatch = useDispatch()
    
    const buttonCooldown = () => {
        setDisabled(true)
        dispatch(increaseMoney(props.income))
        setTimeout(() => {
            setDisabled(false)
        }, props.duration)
        
    }
    return (
        <button disabled={disabled} onClick={() => {buttonCooldown()}}>Publicate</button>
    )
}
