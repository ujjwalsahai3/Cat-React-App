import React from 'react'
import {Row,Col} from 'react-bootstrap'

export default function SearchByAplhabets(props){
    const colStyle={
                        cursor:'pointer',
                        color: 'brown',
                        fontWeight:'bold',
                        padding:5,
                        float:'left'
                    }
    const colTitleStyle={
                            color: '#010101',
                            padding:'5px 0px 5px 10px',
                            float:'left'
                        }
    const rowStyle={
        backgroundColor:'#ECE6EE',
        marginTop:5
    }

    return (

        <Row style={rowStyle} >
            <Col style={colTitleStyle} ><h6>Filter</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('All')}><h6>All</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('A')}> <h6>A</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('B')}> <h6>B</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('C')}> <h6>C</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('D')}> <h6>D</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('E')}> <h6>E</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('F')}> <h6>F</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('G')}> <h6>G</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('H')}> <h6>H</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('I')}> <h6>I</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('J')}> <h6>J</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('K')}> <h6>K</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('L')}> <h6>L</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('M')}> <h6>M</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('N')}> <h6>N</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('O')}> <h6>O</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('P')}> <h6>P</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('Q')}> <h6>Q</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('R')}> <h6>R</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('S')}> <h6>S</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('T')}> <h6>T</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('U')}> <h6>U</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('V')}> <h6>V</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('W')}> <h6>W</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('X')}> <h6>X</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('Y')}> <h6>Y</h6></Col>
            <Col style={colStyle} onClick={()=> props.searchByAlpha('Z')}> <h6>Z</h6></Col>
        </Row>

    )
}


