import React from 'react'
import { useDispatch } from 'react-redux'
import { buyOneActivity } from '../../store/reducers/activities/activityQuantitySlice'
import { decreaseMoney } from '../../store/reducers/values/moneySlice'

export default function ActivityBuy(props) {
    const dispatch = useDispatch()
    const buyActivity = (id, price, quantity) => {
        switch (quantity) {
            case 1:
                dispatch(buyOneActivity(id))
                dispatch(decreaseMoney(price))
                break
        }
        
    }

    return (
        <button className='buy-button' disabled={props.disabled} onClick={() => buyActivity(props.id, props.price, props.quantity)}>Buy</button>
    )
}
