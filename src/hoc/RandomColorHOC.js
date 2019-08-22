import React from 'react';

const RandomColorHOC = (WrappedComponent) =>{

    const colorsArray = ['primary','secondary', 'success', 'info', 'danger', 'warning', 'info']
    const className = "text-" + colorsArray[Math.floor(Math.random() * 6)]

    return (props) =>{
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

export default RandomColorHOC