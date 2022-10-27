import React from 'react'
import './ShopItems.css'

export default function ShopItems(props) {
    
    return (
        props.shopAssortment.map((item) => {
            return (
                <div className='shop-items'>
                    <div className='image-bg'>
                        <img src={'./img/' + item.image} className='item-img'></img>
                    </div>
                    <div key={item.name} className='item-description'>
                        <h4>{item.name}</h4>
                        <p>Price: {item.price}$</p>
                        <p>{item.effect}</p>
                    
                    </div>
                </div>
                )
            }
        )
    )
}
