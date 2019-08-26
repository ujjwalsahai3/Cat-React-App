import React from 'react'
import {Row,Card} from 'react-bootstrap'
import {connect} from 'react-redux'

const DogsInformation = ({dogsData}) =>{
    const breeds= dogsDataHandler(dogsData)
    const style={
        padding:10,
        textTransform: 'capitalize'
    }

    if(breeds.length>0){
        return (
            <Row>
                {breeds.map(dogs => {
                    let colorsArray = ['primary','secondary', 'success', 'info', 'danger', 'warning', 'info']
                    let className = "text-" + colorsArray[Math.floor(Math.random() * 6)]
                    return (
                        <Card key={dogs.id}>
                            <Card.Title style={style} className={className}>{dogs.name}</Card.Title>
                        </Card>
                    )}
                )}
            </Row>
        )
    } else {
        return (<em>No Dogs found</em>)
    }
}



const dogsDataHandler = (breedData) => {
    let breeds = []
    for (let index in breedData) {
        if (breedData[index].length > 0) {
            breedData[index].forEach(element => {
                breeds.push({id: (breeds.length + 1),name: element + " " + index})
            });
        } else 
            breeds.push({id: (breeds.length + 1), name: index})
    }
    return breeds;
}

const mapStatetoProps = (state) => {
    return {
        dogsData: state.dogs.breeds
    }
}

export default connect(mapStatetoProps)(DogsInformation)


