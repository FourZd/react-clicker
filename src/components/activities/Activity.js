import React from 'react'
import './Button.css'
import { increaseMoney } from '../../store/reducers/values/moneySlice'
import { useDispatch } from 'react-redux'

export default function Activity() {
    const dispatch = useDispatch()
    return (
        <section className='publicate-button'>
            <h1>Post something!</h1> 
            <button onClick={() => {dispatch(increaseMoney(5))}}>Publicate</button>
        </section>
    )
}


/* Post something h1 should dissapear after the first click */