import React from 'react';
import {Route} from 'react-router-dom';
import loginForm from './components/loginForm';
import signUpForm from './components/signUpForm';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import patients from './components/patients'
import nurseDashboard from './components/nurseDashboard';
import doctorDashboard from './components/doctorDashboard';
import accountDashboard from './components/accountDashboard';
import adminDashboard from './components/adminDashboard';
import patientsLogin from './components/patientsLogin';
import patientsList from './components/patientsList'
import {Navbar,NavDropdown} from 'react-bootstrap';
import Styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons";
import labTechDashboard from './components/labTechDashboard';


const StyledNav = Styled.nav`
   padding-bottom: 5vh;
`


function App() {
  return (
    <Container className="App">
      <StyledNav>
     
      <Navbar bg="dark" variant="dark">
       
         <Navbar.Brand href=''>MedicFile</Navbar.Brand>
         <Navbar.Collapse className="justify-content-end" >
         <NavDropdown title={<FontAwesomeIcon icon={faBars}/>} id="dropdown"  variant="secondary" alignRight >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
         </NavDropdown>
         </Navbar.Collapse>
      </Navbar>
      </StyledNav>
       
       
       
      
       
      
       <Route exact path = "/login" component={loginForm} />
       <Route exact path = "/signUp" component={signUpForm} />
       <Route exact path = "/" component={Header}/>
       <Route exact path = "/Nurse/dashboard" component={nurseDashboard} /> 
       <Route exact path = "/Doctor/dashboard" component={doctorDashboard} />
       <Route exact path = "/Lab Technician/dashboard" component={labTechDashboard} />
       <Route exact path = "/Accountant/dashboard" component={accountDashboard} />
       <Route exact path = "/Administrator/dashboard" component={adminDashboard} />
       <Route exact path = "/patientsList" component={patientsList} />
       <Route exact path = "/PatientsLogin" component={patientsLogin}/>
       <Route exact path = "/patients/:id" component={patients} />

    </Container>
  );
}

export default App;
