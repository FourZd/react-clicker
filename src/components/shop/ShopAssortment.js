import React from 'react'
import ShopItems from './ShopItems'


export default function ShopAssortment() {
    const shopAssortment = [
        {name: 'Item 1', price: 11, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 2', price: 123, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 3', price: 1444, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 4', price: 15555, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 5', price: 11111, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 6', price: 12332, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 7', price: 2332, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 8', price: 3232, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 9', price: 323232, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 10', price: 232332, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 11', price: 233232, effect: 'some_effect', image: 'somePicture.png'},
        {name: 'Item 12', price: 2323, effect: 'some_effect', image: 'somePicture.png'},
    ]

    return (
        <ShopItems 
            shopAssortment = {shopAssortment}
        />
    )
}
