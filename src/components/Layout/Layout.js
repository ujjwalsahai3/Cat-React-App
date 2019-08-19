import React from 'react'
import {Row, Col} from 'react-bootstrap'
import NavigationBar from '../NavigationBar/NavigationBar'

export default function Layout(props){
    
    
    return(
        <>
            <NavigationBar />
            <Row>
                <Col md={1} xl={1} sm={0} lg={1}>&nbsp;</Col>
                <Col md={10} xl={10} sm={12} lg={10}>
                    { props.children } 
                </Col>
                <Col md={1} xl={1} sm={0} lg={1}>&nbsp;</Col>
            </Row>
        </>
    );
}