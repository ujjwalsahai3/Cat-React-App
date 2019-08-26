import React from 'react'
import {Row,Card} from 'react-bootstrap'
import {connect} from 'react-redux'

const DogsInformation = (props) =>{
    const breeds= dogsDataHandler(props.dogsData.breeds)
    const style={
        padding:10,
        textTransform: 'capitalize'
    }
    return (
        <Row>
            {breeds.map(dogs => <Card key={dogs.id}>
                <Card.Title style={style}>{dogs.name}</Card.Title>
            </Card>
                )}
        </Row>
    )
}

const mapStatetoProps = (state) => {
    return {
        dogsData: state.dogs
    }
}

const dogsDataHandler = (breedData) => {
    let breeds = []
    let count=1;
    for (let index in breedData) {
        if (breedData[index].length > 0) {
            breedData[index].forEach(element => {
                breeds.push({id: count,name: element + " " + index})
                count ++
            });
        } else {
            breeds.push({id: count, name: index})
            count ++
        }
    }
    return breeds;
}

export default connect(mapStatetoProps)(DogsInformation)


