import React from 'react'
import './Shop.css'
export default function ShopItem(props) {
    const availableAssortment = props.shopAssortment.filter(dict => dict['available'] === true)
    return (
        availableAssortment.map((item) => {
            return ( 
                <div className='item' key={item.itemId}>
                    <div>
                        <img className='item-img' src={'./img/' + item.image} />
                    </div>
                    <div>
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
