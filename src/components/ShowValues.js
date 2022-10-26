import React from 'react'

export default function ShowValues(props) {


    return (
      <section>
        <div>You have {props.posts} posts for now</div>
        <div>You have {Number(props.money).toFixed(3)} money for now</div>
        <div>You have {Math.floor(props.subscribers)} subscribers for now</div>
        <div>You have {Number(props.popularity.toFixed(3))} popularity for now</div>
        <div>World is on {Number(props.worldTension.toFixed(3))}% in chaos</div>
      </section>
      
    )
}

