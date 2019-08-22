import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { NavLink, withRouter} from 'react-router-dom'


function NavigationBar(props){
    /*
    //Detail: Programmatic Redirect to another component
    setTimeout(() => {
        props.history.push('/Dogs')
    }, 2000);
    */
    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Cat App</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/Dogs">Dogs</NavLink>
            </Nav>
        </Navbar>
    );
}
//withRouter is a HOC that super charged the NavigationBar Component with ther route properties. 
//So that we can use history.push for programmatic routing
export default withRouter(NavigationBar)