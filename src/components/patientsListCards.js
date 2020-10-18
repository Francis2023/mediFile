import React from "react";
import {Card} from 'react-bootstrap'

const PatientsListCards = props => {

    console.log(props)

    return (
        <div>
            
            <Card className="text-center" style={{width: '18rem', marginTop:'2rem'}}>
                <Card.Link href='' > 
                   <Card.Img variant="top" src=" "/>
                   <Card.Body>
                        <Card.Title as="h5">Name: {props.patientData.name}</Card.Title>
                        <Card.Text className="patientsRoom">Room #: {props.patientData.roomNumber}</Card.Text>
                   </Card.Body>
                </Card.Link>
            </Card>
    
        </div>

    )
} //style={{width: '18rem'}}

export default PatientsListCards;