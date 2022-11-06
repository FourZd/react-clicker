import React from 'react'
import './Activities.css'
import { increaseMoney } from '../../store/reducers/values/moneySlice'
import { useDispatch } from 'react-redux'

export default function Activity(props) {
    const dispatch = useDispatch()
    return (
        props.activitiesList.map(activity => {
            return (
                <section className='activity-block'>
                    <h3>{activity.name}</h3> 
                    <button onClick={() => {dispatch(increaseMoney(activity.income))}}>Publicate</button>
                </section>
            )
        })
    )
}


/* Post something h1 should dissapear after the first click */