import React from 'react'
import {Route} from 'react-router-dom';
import patientsLogin from './patientsLogin'
import {Card,CardDeck} from 'react-bootstrap'
import styled from 'styled-components';
import { faUsers,faEnvelope,faTasks,faUserMd} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Styledh1 = styled.h1`
     display: flex;
     justify-content: center;
     box-sizing: border-box;
     font-weight: bold;
     color: white;
     margin-bottom: 6vh;
`

function doctorDashboard (props) {

  
   return (
       <div>
            <Styledh1>Dashboard</Styledh1>
            <CardDeck >
                <Card className="text-center" >
                  <Card.Link href='/' >
                   <Card.Body>
                    <Card.Title as="h5"> PATIENTS</Card.Title>
                    
                    <FontAwesomeIcon icon={faUsers} size='7x' />
                  
                   </Card.Body>
                  </Card.Link>
                </Card>
                <Card className="text-center">
                  <Card.Link href='/:id/message' > 
                   <Card.Body>
                   <Card.Title as="h5">MESSAGE</Card.Title>
                   <FontAwesomeIcon icon={faEnvelope} size='7x' />
                   </Card.Body>
                   </Card.Link>
                </Card>
            </CardDeck>
            <br />
            <CardDeck>
                <Card className="text-center">
                <Card.Link href='/:id/Tasks' > 
                   <Card.Body>
                    <Card.Title as="h5">TASK</Card.Title>
                    <FontAwesomeIcon icon={faTasks} size='7x' />
                   </Card.Body>
                   </Card.Link>
                </Card>
                <Card className="text-center">
                <Card.Link href='/:id/Profile' > 
                   <Card.Body>
                   <Card.Title as="h5"> PROFILE</Card.Title>
                   <FontAwesomeIcon icon={faUserMd} size='7x' />
                   </Card.Body>
                  </Card.Link>
                </Card>
            </CardDeck>

      <Route exact path = "/" component={patientsLogin} />   
       </div>



    
   )
 
}

export default doctorDashboard;