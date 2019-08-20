import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'


export default function NavigationBar(){
    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Cat App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
    );
}