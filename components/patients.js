import React from 'react'
import {Route} from 'react-router-dom';
import patientsLogin from './patientsLogin'
import {Card,CardDeck} from 'react-bootstrap'
import styled from 'styled-components';
import { faIdCard,faListAlt,faVial,faFileMedical} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Styledh1 = styled.h1`
     display: flex;
     justify-content: center;
     box-sizing: border-box;
     font-weight: bold;
     color: white;
     margin-bottom: 6vh;
`

function patients (props) {

  
   return (
       <div>
            <Styledh1>Patients Name</Styledh1>
            <CardDeck >
                <Card className="text-center" >
                  <Card.Link href='/patientsLogin' >
                   <Card.Body>
                    <Card.Title as="h5">Profile</Card.Title>
                    
                    <FontAwesomeIcon icon={faIdCard} size='7x' />
                  
                   </Card.Body>
                  </Card.Link>
                </Card>
                <Card className="text-center">
                  <Card.Link href='/:id/message' > 
                   <Card.Body>
                   <Card.Title as="h5">Questionnaires</Card.Title>
                   <FontAwesomeIcon icon={faListAlt} size='7x' />
                   </Card.Body>
                   </Card.Link>
                </Card>
            </CardDeck>
            <br />
            <CardDeck>
                <Card className="text-center">
                <Card.Link href='/:id/Tasks' > 
                   <Card.Body>
                    <Card.Title as="h5">Lab Results</Card.Title>
                    <FontAwesomeIcon icon={faVial} size='7x' />
                   </Card.Body>
                   </Card.Link>
                </Card>
                <Card className="text-center">
                <Card.Link href='/:id/Profile' > 
                   <Card.Body>
                   <Card.Title as="h5">Medical History</Card.Title>
                   <FontAwesomeIcon icon={faFileMedical} size='7x' />
                   </Card.Body>
                  </Card.Link>
                </Card>
            </CardDeck>

       
       </div>



    
   )
 
}

export default patients;