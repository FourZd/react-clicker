import React, { useState } from 'react'
import ShopAssortment from './ShopAssortment'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Shop.css'

    
export default function ShopAccess(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section>
            <Button onClick={handleShow} className='open-shop-button'>
                <p className='shop-button-text'>Open shop</p>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="bottom" className='shop'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h2>Shop</h2></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ShopAssortment
                        handleMultiplier = {props.handleMultiplier}
                        decreaseCurrency = {props.decreaseCurrency}
                        money = {props.money}
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </section>
    
  )
}
