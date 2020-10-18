import React from 'react'
import {Card,CardDeck} from 'react-bootstrap'
import styled from 'styled-components';
import { faUsers,faEnvelope,faTasks,faUserMd, faUser, faFileInvoiceDollar, faCalendarPlus, faClipboardList} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';

const Styledh1 = styled.h1`
     display: flex;
     justify-content: center;
     box-sizing: border-box;
     font-weight: bold;
     color: white;
     margin-bottom: 6vh;
`

function FrontDeskDashboard (props) {

  
   return (
       <div>
            <Styledh1>Dashboard</Styledh1>
            <CardDeck >
                <Card className="text-center" >
                  <Card.Link href='/new_patient' >
                   <Card.Body>
                    <Card.Title as="h5">NEW PATIENT</Card.Title>
                    
                    <FontAwesomeIcon icon={faUser} size='7x' />
                  
                   </Card.Body>
                  </Card.Link>
                </Card>
                <Card className="text-center">
                  <Card.Link href='/patientCheckIn' > 
                   <Card.Body>
                   <Card.Title as="h5">CHECK IN</Card.Title>
                   <FontAwesomeIcon icon={faCheckSquare} size='7x' />
                   </Card.Body>
                   </Card.Link>
                </Card>
            </CardDeck>
            <br />
            <CardDeck >
                <Card className="text-center" >
                  <Card.Link href='/billing' >
                   <Card.Body>
                    <Card.Title as="h5">BILLING</Card.Title>
                    
                    <FontAwesomeIcon icon={faFileInvoiceDollar} size='7x' />
                  
                   </Card.Body>
                  </Card.Link>
                </Card>
                <Card className="text-center">
                  <Card.Link href='/appointment' > 
                   <Card.Body>
                   <Card.Title as="h5">New Appointment</Card.Title>
                   <FontAwesomeIcon icon={faCalendarPlus} size='7x' />
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
                <Card.Link href='/transactions' > 
                   <Card.Body>
                   <Card.Title as="h5">TRANSACTIONS</Card.Title>
                   <FontAwesomeIcon icon={faClipboardList} size='7x' />
                   </Card.Body>
                  </Card.Link>
                </Card>
            </CardDeck>
            <br />
            <CardDeck >
            <Card className="text-center">
                <Card.Link href='/:id/Profile' > 
                   <Card.Body>
                   <Card.Title as="h5">PROFILE</Card.Title>
                   <FontAwesomeIcon icon={faUserMd} size='7x' />
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

    
       </div>



    
   )
 
}

export default FrontDeskDashboard;