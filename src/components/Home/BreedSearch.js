import React from 'react'
import './Home.css'

export default function BreedSearch(props){
    return (
        <div className='breed-search'> 
            <input 
                type='text' 
                placeholder='Search' 
                onChange={(event) => props.searchBreed(event.target.value)} 
            /> 
        </div>
    )
}