import React, { Component } from 'react'
import axios from 'axios'
import {Image, Row, Col, Card, Spinner} from 'react-bootstrap'
import RandomColorHOC from '../../hoc/RandomColorHOC'

class Cat extends Component {

    state={id: null,selectedBreed: [], catPic: null, isLoading: true}

    componentDidMount(){
        const catId=this.props.match.params.catId
        this.setState({id:catId})

        axios.get('https://api.thecatapi.com/v1/images/search?breed_ids='+catId)
        .then(result => {
            if(result.data.length===0)
                this.props.history.push("/")
            else{
                const {breeds,url}=result.data[0]
                this.setState({selectedBreed:breeds[0], catPic:url, isLoading: false})
                //console.log(breeds[0])
            }
        })
    }

    render() { 
        const imageStyle={
            height:350,
            borderRadius: 15
        }

        const content = this.state.isLoading? (
            <Spinner animation="border" variant="warning" ><span className="sr-only">Loading...</span></Spinner>
        ) : (
            <>
                <Col  md={12} lg={12} xl={12} sm={12} className='text-center'>
                    <h3>
                        {this.state.selectedBreed.name} 
                        <small>
                            {" Origin ("+this.state.selectedBreed.origin + ")"}
                        </small>
                    </h3>
                </Col>
                  
                <Col md={12} lg={12} xl={12} sm={12} className='text-center'>
                    <Image src={this.state.catPic} style={imageStyle}  />
                </Col>      
                <Col md={12} lg={12} xl={12} sm={12} className='text-center'>
                    <article><b>{this.state.selectedBreed.description}</b></article>
                </Col> 
                <Col md={12} lg={12} xl={12} sm={12} className='text-center'>
                    <article><b>{"Average age is "+ this.state.selectedBreed.life_span + "years"}</b></article>
                    <article><b>{this.state.selectedBreed.temperament}</b></article>
                </Col> 
                <Col md={12} lg={12} xl={12} sm={12} className='text-center'>
                    <h5>Rating</h5>
                   <Card className='col-md-4' style={{float:'left'}}>
                       <Card.Title>Adaptability</Card.Title>
                       <Card.Body>{this.state.selectedBreed.adaptability +" stars"}</Card.Body>
                   </Card>

                   <Card className='col-md-4' style={{float:'left'}}>
                       <Card.Title>Affection</Card.Title>
                       <Card.Body>{this.state.selectedBreed.affection_level +" stars"}</Card.Body>
                   </Card>

                   <Card className='col-md-4' style={{float:'left'}}>
                       <Card.Title>Child Friendly</Card.Title>
                       <Card.Body>{this.state.selectedBreed.child_friendly +" stars"}</Card.Body>
                   </Card>

                   <Card className='col-md-4' style={{float:'left'}}>
                       <Card.Title>Dog Friendly</Card.Title>
                       <Card.Body>{this.state.selectedBreed.dog_friendly +" stars"}</Card.Body>
                   </Card>
                   <Card className='col-md-4' style={{float:'left'}}>
                       <Card.Title>Energy</Card.Title>
                       <Card.Body>{this.state.selectedBreed.energy_level +" stars"}</Card.Body>
                   </Card>
                   <Card className='col-md-4' style={{float:'left'}}>
                       <Card.Title>Intelligence</Card.Title>
                       <Card.Body>{this.state.selectedBreed.intelligence +" stars"}</Card.Body>
                   </Card>
                </Col>
            </>
        )

        return (
            <Row className="container">
                {content}
            </Row>
            );
    }
}
 
export default RandomColorHOC(Cat);