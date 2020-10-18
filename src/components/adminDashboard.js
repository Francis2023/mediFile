import React from 'react'
import {Card,CardDeck} from 'react-bootstrap'
import styled from 'styled-components';
import { faEnvelope,faTasks, faUser, faCalendarPlus, faClipboardList, faUsers, faUserTie, faCalendarWeek, faChartBar, faBoxes, faFolder} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Styledh1 = styled.h1`
     display: flex;
     justify-content: center;
     box-sizing: border-box;
     font-weight: bold;
     color: white;
     margin-bottom: 6vh;
`

function adminDashboard (props) {

  
   return (
       <div>
            <Styledh1>Dashboard</Styledh1>
            <CardDeck >
            <Card className="text-center">
                <Card.Link href='/:id/Tasks' > 
                   <Card.Body>
                    <Card.Title as="h5">TASKS</Card.Title>
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
                <Card className="text-center" >
                  <Card.Link href='/patientsLogin' >
                   <Card.Body>
                    <Card.Title as="h5"> PATIENTS</Card.Title>
                    
                    <FontAwesomeIcon icon={faUsers} size='7x' />
                  
                   </Card.Body>
                  </Card.Link>
                </Card>
            </CardDeck>
            <br />
            <CardDeck >
                <Card className="text-center" >
                  <Card.Link href='staffs' >
                   <Card.Body>
                    <Card.Title as="h5">STAFFS</Card.Title>
                    
                    <FontAwesomeIcon icon={faUserTie} size='7x' />
                  
                   </Card.Body>
                  </Card.Link>
                </Card>
                <Card className="text-center">
                  <Card.Link href='/appointment' > 
                   <Card.Body>
                   <Card.Title as="h5">APPOINTMENTS</Card.Title>
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
                    <Card.Title as="h5">SCHEDULE</Card.Title>
                    <FontAwesomeIcon icon={faCalendarWeek} size='7x' />
                   </Card.Body>
                   </Card.Link>
                </Card>
                <Card className="text-center">
                <Card.Link href='/transactions' > 
                   <Card.Body>
                   <Card.Title as="h5">ANALYSIS</Card.Title>
                   <FontAwesomeIcon icon={faChartBar} size='7x' />
                   </Card.Body>
                  </Card.Link>
                </Card>
                <Card className="text-center">
                <Card.Link href='/transactions' > 
                   <Card.Body>
                   <Card.Title as="h5">INVENTORY</Card.Title>
                   <FontAwesomeIcon icon={faBoxes} size='7x' />
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
                   <FontAwesomeIcon icon={faUser} size='7x' />
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
                <Card className="text-center">
                <Card.Link href='/transactions' > 
                   <Card.Body>
                   <Card.Title as="h5">DOCUMENTS</Card.Title>
                   <FontAwesomeIcon icon={faFolder} size='7x' />
                   </Card.Body>
                  </Card.Link>
                </Card>
            </CardDeck>

        
       </div>



    
   )
 
}

export default adminDashboard;