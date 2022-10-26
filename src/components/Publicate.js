import React from 'react'
import Button from './Button';
import ShowValues from './ShowValues';

export default function Publicate(props) {
    const handleClick = () => {
        props.addMoney()
        props.addPost()
        props.addSubscribers()
        props.updatePopularity()
        props.updateWorldTension()
    }

    return (
        <div>
            <ShowValues 
                posts={props.posts} 
                money={props.money}
                subscribers={props.subscribers}
                popularity={props.popularity}
                worldTension={props.worldTension}
            />

            <Button handleClick={handleClick} />
        </div>
    )
}

