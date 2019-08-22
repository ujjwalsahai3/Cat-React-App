import React, { Component } from 'react'
import axios from 'axios'
import appStore from '../../store'
import { dogsAllBreeds } from "../../actions/dogActions"

export default class Dogs extends Component{
    
    componentDidMount(){
        let breeds=[]
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(result => {
            const breedData=result.data.message;
            for (let index in breedData) {
                if(breedData[index].length > 0){
                    breedData[index].forEach(element => {
                        breeds.push(element+" "+ index)
                    });
                } else {
                    breeds.push(index)
                }
            }
        })
        appStore.dispatch(dogsAllBreeds({ breeds:breeds }) )
    }

    render(){
        appStore.subscribe(() => {
            const dogs=appStore.getState().dogs;
            console.log(dogs)
        })
        
        return (
            <h1>abx</h1>
        )
    }
    
}