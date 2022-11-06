import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './ShowValues.css'
import { moneySelector } from '../../store/reducers/moneySlice';
import { useSelector } from 'react-redux';
export default function ShowValues(props) {

    return (
        <section>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand className='brand'>Political Influencer Super Simulator</Navbar.Brand>
                <Nav className="mr-auto">
                    
                    <div>{Number(useSelector(moneySelector)).toFixed(3)}$</div>

                </Nav>
            </Navbar>
        </section>
    )
}

