import React from 'react'
import Button from './Button';

export default function Publicate(props) {
    const handlePublicateClick = () => {
        const values = ['money', 'posts', 'subscribers', 'worldTension']
        values.map(value => props.handleValueIncrement(value))
    }

    return (
        <Button handleClick={handlePublicateClick} />
    )
}

