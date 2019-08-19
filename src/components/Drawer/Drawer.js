import React from 'react'
import {Button,Col} from 'react-bootstrap'
import './Drawer.css'

export default function Drawer(props){
    return (
        <div className='drawer-container'>
            <Button variant="warning" onClick={() => props.toggleDrawer()} >
                {props.drawerBtnText}
            </Button>
            <Col className='drawer' style={{display: props.displayDrawer}}>
            <Col className='listings' onClick={(event)=> props.filterByValue(event)} > All</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > A</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > B</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > C</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > D</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > E</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > F</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > G</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > H</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > I</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > J</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > K</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > L</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > M</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > N</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > O</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > P</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > Q</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > R</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > S</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > T</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > U</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > V</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > W</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > X</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > Y</Col>
                <Col className='listings' onClick={(event)=> props.filterByValue(event)} > Z</Col>
            </Col>
        </div>
    )
}
