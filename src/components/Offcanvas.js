import React from 'react';
import ShopAssortment from './shop/ShopAssortment';
import './Offcanvas.css'
import { useSelector } from 'react-redux';
import { offcanvasSelector } from '../store/reducers/interface/offcanvasSlice';
import { render } from '@testing-library/react';

export default function Offcanvas() {

    const activeMenu = useSelector(offcanvasSelector)
    const shop = ShopAssortment

    const renderActiveMenu = () => {
        switch(activeMenu) {
            case 'shop':
                return (
                    <div className='shop'>
                        <ShopAssortment />
                    </div>
                )
            
            case 'staff':
                return (
                    <div className='staff'>
                        jansdjnsadjn
                    </div>
                )
            default:
                return null
        }
    } 
    console.log(activeMenu)
    return(
        renderActiveMenu()
    )
    
}