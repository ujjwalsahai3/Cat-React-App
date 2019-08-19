import React from 'react'
import './Home.css'

export default function BreedSideBar (props){
const breeds=props.breeds.length > 0 ? props.breeds : [];

if(breeds.length > 0){
    return (
        <div className='breeds-inner-container'>
            {breeds.map(breed=>
                    <div key={breed.id} className='breeds-listing' onClick={() => props.viewcat(breed.id)}>
                        {breed.name}
                    </div>
            )}
        </div>
    )
}
else
    return (
        <div className='breeds-inner-container'>
            Not Available
        </div>
    )
}