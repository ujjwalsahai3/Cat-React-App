import React, { Component } from 'react'
import axios from 'axios'
import {setDogsData } from "../../actions/dogActions"
import {connect} from 'react-redux'
import {Spinner} from 'react-bootstrap'
import DogsInformation from './DogsInformation'

class Dogs extends Component{
    
    componentDidMount(){
        setTimeout(() => {
            this.getDogsData() 
        }, 3000)
    }

    getDogsData = () =>{
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(result => {
                this.props.setDogsBreeds(result.data.message)
            })
    }

    render(){
        const dogsData= this.props.dogsData;
        const content = dogsData.isLoading? (
            <Spinner animation="border" variant="warning" ><span className="sr-only">Loading...</span></Spinner>
        ): ( 
            <DogsInformation />
        )
        return (
            <h1>{content}</h1>
        )
    }
    
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setDogsBreeds : (breeds) =>{ dispatch(setDogsData(breeds)) }
    }
}

const mapStateToProps = (state) =>{
    return {
        dogsData: state.dogs
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dogs)