import React, {useState} from 'react'
import StoreItem from './StoreItem'

export default function ShopAssortment() {
    shopAssortment = [{name: 'none', price: 0, effect: 'some_effect'}, {name: 'none', price: 0, effect: 'some_effect'}]
    // google how to pass dict to a child
    return (
        <StoreItem shopAssortment/>
    )
}
