import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShopItem from './ShopItem';
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
                    <ShopItem
                        shopAssortment = {props.shopAssortment}
                        handleUpgradeBuy = {props.handleUpgradeBuy}
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </section>
    
  )
}
