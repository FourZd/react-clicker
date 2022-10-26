import React from 'react'

export default function StoreItem(props) {
  return (
    props.shopAssortment.map(item = () => {
        <div>{item.name}</div>
    }
    )
  )
}
