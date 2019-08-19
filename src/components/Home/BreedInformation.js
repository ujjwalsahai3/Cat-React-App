import React from 'react'
import {Image, Col} from 'react-bootstrap'
import './Home.css'

export default function BreedInformation(props){
    return(
        <div className='breed-info'>
            <Col className='breed-info-heading'>
                <h5>{props.selectedCat.name}</h5>
            </Col>
            <Col style={{textAlign:'center'}}>
                <Image src={props.catPic} className='breed-info-img'  />
            </Col>
            <Col>
                <p><b>Origin: </b>{props.selectedCat.origin}</p>
                <p><b>Description: </b>{props.selectedCat.description}</p>
                <p><b>Temperament: </b>{props.selectedCat.temperament}</p>
            </Col>
        </div>
    )
}