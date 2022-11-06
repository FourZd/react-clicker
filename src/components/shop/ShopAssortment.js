import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseMoney, moneySelector } from '../../store/reducers/values/moneySlice'
import { increaseAllMultipliers, increaseSingleMultiplier } from '../../store/reducers/activities/incomeMultiplierSlice'
import ShopAccess from './ShopAccess'


export default function ShopAssortment() {

    const money = useSelector(moneySelector)
    const dispatch = useDispatch()

    const [shopAssortment, setShopAssortment] = useState([
        {itemId: 1, name: 'Item 1', price: 1, effect: {'tgChannel': 2}, 
        description: 'Увеличивает прирост подписчиков вдвое', image: 'somePicture.png', available: true},

        {itemId: 2, name: 'Item 2', price: 123, effect: {'ytChannel': 2}, 
        description: 'Увеличивает приток денег вдвое', image: 'somePicture.png', available: true},

        {itemId: 3, name: 'Item 3', price: 1444, effect: {'allActivities': 2}, 
        description: 'Увеличивает эффект хаоса вдвое', image: 'somePicture.png', available: true},

        {itemId: 4, name: 'Item 4', price: 15555, effect: {'subscribers': 2}, 
        description: 'Увеличивает прирост подписчиков вдвое',  image: 'somePicture.png', available: true},

        {itemId: 5, name: 'Item 5', price: 11111, effect: {'money': 2}, 
        description: 'Увеличивает приток денег вдвое', image: 'somePicture.png', available: true},

        {itemId: 6, name: 'Item 6', price: 12332, effect: {'worldTension': 2}, 
        description: 'Увеличивает эффект хаоса вдвое', image: 'somePicture.png', available: true},

        {itemId: 7, name: 'Item 7', price: 2332, effect: {'subscribers': 2}, 
        description: 'Увеличивает прирост подписчиков вдвое',  image: 'somePicture.png', available: true},

        {itemId: 8, name: 'Item 8', price: 3232, effect: {'worldTension': 2}, 
        description: 'Увеличивает эффект хаоса вдвое', image: 'somePicture.png', available: true},

        {itemId: 9, name: 'Item 9', price: 323232, effect: {'subscribers': 2}, 
        description: 'Увеличивает прирост подписчиков вдвое',  image: 'somePicture.png', available: true},

        {itemId: 10, name: 'Item 10', price: 232332, effect: {'money': 2}, 
        description: 'Увеличивает приток денег вдвое', image: 'somePicture.png', available: true},

        {itemId: 11, name: 'Item 11', price: 233232, effect: {'worldTension': 2, 'money': 2}, 
        description: 'Увеличивает прирост денег и эффект хаоса вдвое', image: 'somePicture.png', available: true},

        {itemId: 12, name: 'Item 12', price: 2323, effect: {'subscribers': 2}, 
        description: 'Увеличивает прирост подписчиков вдвое',  image: 'somePicture.png', available: true},
    ])
    
    const handleUpgradeBuy = (boughtUpgradeId) => {
        const updatedShopAssortment = [...shopAssortment]
        updatedShopAssortment.map((dict) => {
            if (dict.itemId === boughtUpgradeId) {
                if (money >= dict.price) {
                    dict['available'] = false
                    setShopAssortment(updatedShopAssortment)
                    dispatch(decreaseMoney(dict.price))
                    const itemEffect = Object.entries(dict.effect) // [[value, effect], ] array
                    
                    const activityName = itemEffect[0][0]
                    const effect = itemEffect[0][1]
                    switch (activityName) {
                        case 'allActivities':
                            dispatch(increaseAllMultipliers(effect))
                            break
                        default:
                            dispatch(increaseSingleMultiplier(activityName, effect))
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
