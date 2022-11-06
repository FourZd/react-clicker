import React from 'react'
import './ShopItems.css'

export default function ShopItem(props) {
    const availableAssortment = props.shopAssortment.filter(dict => dict['available'] === true)
    return (
        availableAssortment.map((item) => {
            return ( 
                <div className='shop-items' key={item.itemId}>
                    <div className='image-bg'>
                        <img src={'./img/' + item.image} className='item-img'></img>
                    </div>
                    <div className='item-description'>
                        <h4>{item.name}</h4>
                        <p>Price: {item.price}$</p>
                        <p>{item.description}</p>
                    </div>
                    <button onClick={() => props.handleUpgradeBuy(item.itemId)}>Buy</button>
                </div>
                )
            }
        )
    )
}
