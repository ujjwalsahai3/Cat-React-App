import React from 'react'
import {Row, Col, Spinner} from 'react-bootstrap'
import axios from 'axios'
import BreedSideBar from './BreedSideBar'
import BreedInformation from './BreedInformation'
import BreedSearch from './BreedSearch'
import SearchByAlphabets from './SearchByAlphabets'
import Drawer from '../Drawer/Drawer'
import './Home.css'

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={isLoadingBreed:true, breeds:[], selectedBreed:{}, catPic:'', dispalyDescription:'none', allbreeds:[], displayDrawer:'none', drawerBtnText:'Show Filter'}
    }

    componentDidMount(){
        axios.get('https://api.thecatapi.com/v1/breeds')
        .then(result=>{
            const breedData=[]
            result.data.forEach(breeds => {
                const {id, name, description, origin, temperament} = breeds
                breedData.push({id:id, name:name, description:description, origin:origin, temperament:temperament})
            });
            this.setState({breeds: breedData, isLoadingBreed: false, allbreeds: breedData})
            this.getCatbyId(breedData[0].id)
        });
    }

    getCatbyId=(id)=>{
        this.setState({dispalyDescription:'none'})
        axios.get('https://api.thecatapi.com/v1/images/search?breed_ids='+id)
        .then(result => {
            const {breeds,url}=result.data[0]
            this.setState({selectedBreed:breeds[0], catPic:url, dispalyDescription: 'block'})
        })
    }

    searchByBreed=(value)=>{
        if(value!==''){
            this.setState({breeds:this.state.allbreeds.filter(breed => {
                    return (breed.name.toString().indexOf(value) >= 0) && breed
                })
            })
        }
        else
            this.setState({breeds:this.state.allbreeds})
    }

    searchByAlpha=(value) =>{
        if(value==='All')
            this.setState({breeds:this.state.allbreeds})
        else{
            this.setState({breeds:this.state.allbreeds.filter(breed => {
                    return (breed.name.toString().startsWith(value)) && breed
                })
            })
        }
    }

    toggleDrawerDisplay =() =>{
        if(this.state.displayDrawer==='none')
            this.setState({displayDrawer:'block', drawerBtnText: 'Hide Filter'})
        else
            this.setState({displayDrawer:'none', drawerBtnText: 'Show Filter'})
    }

    filterByValue=event =>{
        const div= event.target
        this.searchByAlpha(div.innerHTML.toString().trim())
    }

    render(){
        const loadingContent=<Spinner animation="border" variant="warning" ><span className="sr-only">Loading...</span></Spinner>
        const breedContent= this.state.isLoadingBreed ? loadingContent : <BreedSideBar breeds={this.state.breeds} viewcat={this.getCatbyId} />
        
        return (
            <>
                <Row>
                    <Col className='breeds' xs={3} lg={3} md={3} xl={3} >
                        <h5>Breeds</h5>
                        <BreedSearch searchBreed={this.searchByBreed} />
                        <div className='breeds-container'>
                            {breedContent}
                        </div>
                    </Col>
                    <Col xs={9} lg={9} md={9} xl={9} style={{display:this.state.dispalyDescription}}>
                        <SearchByAlphabets searchByAlpha={this.searchByAlpha} />
                        <BreedInformation selectedCat={this.state.selectedBreed} catPic={this.state.catPic} />
                    </Col>
                </Row>
                <Drawer 
                    displayDrawer={this.state.displayDrawer} 
                    toggleDrawer={this.toggleDrawerDisplay} 
                    drawerBtnText={this.state.drawerBtnText} 
                    filterByValue={this.filterByValue}
                />
            </>
        )
    }
}