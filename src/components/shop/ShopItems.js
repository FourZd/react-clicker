import React from 'react'
import './ShopItems.css'

export default function ShopItems(props) {
    return (
        props.shopAssortment.map((item) => {
            return ( 
                <div className='shop-items' key={item.item_id}>
                    <div className='image-bg'>
                        <img src={'./img/' + item.image} className='item-img'></img>
                    </div>
                    <div className='item-description'>
                        <h4>{item.name}</h4>
                        <p>Price: {item.price}$</p>
                        <p>{item.effect}</p>
                    <button onClick={() => props.handleUpgradeBuy(item.item_id)}>Publicate</button>
                    </div>
                </div>
                )
            }
        )
    )
}
