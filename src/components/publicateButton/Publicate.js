import React from 'react'
import Button from './Button';

export default function Publicate(props) {
    const handleClick = () => {
        props.addMoney()
        props.addPost()
        props.addSubscribers()
        
        props.updatePopularity()
        props.updateWorldTension()
    }

    return (
        <Button handleClick={handleClick} />
    )
}

