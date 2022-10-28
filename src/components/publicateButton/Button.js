import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <section className='publicate-button'>
            <h1>Post something!</h1> 
            <button onClick={props.handleClick}>Publicate</button>
        </section>
    )
}


/* Post something h1 should dissapear after the first click */