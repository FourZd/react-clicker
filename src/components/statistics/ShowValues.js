import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './ShowValues.css'

export default function ShowValues(props) {
    return (
        <section>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand className='brand'>Political Influencer Super Simulator</Navbar.Brand>
                <Nav className="mr-auto">
                    <div>{props.posts} posts</div> 

                    <div>{Number(props.money).toFixed(3)} money</div>

                    <div>{Math.floor(props.subscribers)} subscribers</div>

                    <div>{Number(props.popularity.toFixed(3))} popularity</div>

                    <div>World is on {Number(props.worldTension.toFixed(3))}% in chaos</div>
                </Nav>
            </Navbar>
        </section>
    )
}

