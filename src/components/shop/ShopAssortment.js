import React from 'react'
import ShopItems from './ShopItems'


export default function ShopAssortment(props) {
    const shopAssortment = [
        {item_id: 1, name: 'Item 1', price: 11, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 2, name: 'Item 2', price: 123, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 3, name: 'Item 3', price: 1444, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 4, name: 'Item 4', price: 15555, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 5, name: 'Item 5', price: 11111, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 6, name: 'Item 6', price: 12332, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 7, name: 'Item 7', price: 2332, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 8, name: 'Item 8', price: 3232, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 9, name: 'Item 9', price: 323232, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 10, name: 'Item 10', price: 232332, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 11, name: 'Item 11', price: 233232, effect: 'some_effect', image: 'somePicture.png', available: true},
        {item_id: 12, name: 'Item 12', price: 2323, effect: 'some_effect', image: 'somePicture.png', available: true},
    ]

    const availableAssortment = shopAssortment.filter(dict => dict.available === true)

    const handleUpgradeBuy = (bought_upgrade_id) => {
        shopAssortment.map((dict) => {
            if (dict['item_id'] === bought_upgrade_id) {
                console.log('working')
                dict['available'] = false
            }
        })

    }

    return (
        <ShopItems 
            shopAssortment = {availableAssortment}
            handleUpgradeBuy = {handleUpgradeBuy}
        />
    )
}
