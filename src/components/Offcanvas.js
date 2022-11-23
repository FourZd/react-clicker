import React from 'react';
import ShopAssortment from './shop/ShopAssortment';
import './Offcanvas.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveMenu, offcanvasSelector } from '../store/reducers/interface/offcanvasSlice';

export default function Offcanvas() {
    const dispatch = useDispatch()
    const activeMenu = useSelector(offcanvasSelector)

    const renderActiveMenu = () => {
        switch(activeMenu) {
            case 'shop':
                return (
                    <section className='active-menu'>
                        <div className='inside-menu'>
                            <ShopAssortment />
                        </div>
                        <div>
                            <button className='close-menu' onClick={() => {dispatch(changeActiveMenu('inactive'))}}>Close</button>
                        </div>
                    </section>
                    
                )
            
            case 'staff':
                return (
                    <div className='offcanvas'>
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