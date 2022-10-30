import React, { useState } from 'react'
import ShopAccess from './ShopAccess'


export default function ShopAssortment(props) {
    const [shopAssortment, setShopAssortment] = useState([
        {item_id: 1, name: 'Item 1', price: 1, effect: {'subscribers': 2}, 
        description: 'Увеличивает прирост подписчиков вдвое', image: 'somePicture.png', available: true},

        {item_id: 2, name: 'Item 2', price: 123, effect: {'money': 2}, 
        description: 'Увеличивает приток денег вдвое', image: 'somePicture.png', available: true},

        {item_id: 3, name: 'Item 3', price: 1444, effect: {'worldTension': 2}, 
        description: 'Увеличивает эффект хаоса вдвое', image: 'somePicture.png', available: true},

        {item_id: 4, name: 'Item 4', price: 15555, effect: {'subscribers': 2}, 
        description: 'Увеличивает прирост подписчиков вдвое',  image: 'somePicture.png', available: true},

        {item_id: 5, name: 'Item 5', price: 11111, effect: {'money': 2}, 
        description: 'Увеличивает приток денег вдвое', image: 'somePicture.png', available: true},

        {item_id: 6, name: 'Item 6', price: 12332, effect: {'worldTension': 2}, 
        description: 'Увеличивает эффект хаоса вдвое', image: 'somePicture.png', available: true},

        {item_id: 7, name: 'Item 7', price: 2332, effect: {'subscribers': 2}, 
        description: 'Увеличивает прирост подписчиков вдвое',  image: 'somePicture.png', available: true},

        {item_id: 8, name: 'Item 8', price: 3232, effect: {'worldTension': 2}, 
        description: 'Увеличивает эффект хаоса вдвое', image: 'somePicture.png', available: true},

        {item_id: 9, name: 'Item 9', price: 323232, effect: {'subscribers': 2}, 
        description: 'Увеличивает прирост подписчиков вдвое',  image: 'somePicture.png', available: true},

        {item_id: 10, name: 'Item 10', price: 232332, effect: {'money': 2}, 
        description: 'Увеличивает приток денег вдвое', image: 'somePicture.png', available: true},

        {item_id: 11, name: 'Item 11', price: 233232, effect: {'worldTension': 2, 'money': 2}, 
        description: 'Увеличивает прирост денег и эффект хаоса вдвое', image: 'somePicture.png', available: true},

        {item_id: 12, name: 'Item 12', price: 2323, effect: {'subscribers': 2}, 
        description: 'Увеличивает прирост подписчиков вдвое',  image: 'somePicture.png', available: true},
    ])

    const handleUpgradeBuy = (bought_upgrade_id) => {
        const updatedShopAssortment = [...shopAssortment]
        updatedShopAssortment.map((dict) => {
            if (dict.item_id === bought_upgrade_id) {
                if (props.money >= dict.price) {
                    dict['available'] = false
                    setShopAssortment(updatedShopAssortment)
                    props.decreaseCurrency('money', dict.price)
                    const item_effect = Object.entries(dict.effect) // [[value, effect], ] array
                    if (item_effect.length > 1) {
                        console.log('IN DEVELOPMENT') // ------------------------------------------------------ Multiple effects
                    } else {
                        props.handleMultiplier(
                            item_effect[0][0],
                            item_effect[0][1]
                        )
                    }
                }
            }
        })
    }


    return (
        <ShopAccess
            shopAssortment = {shopAssortment}
            handleUpgradeBuy = {handleUpgradeBuy}
        />
    )
}
