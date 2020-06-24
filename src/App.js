import React from 'react';
import {Route} from 'react-router-dom';
import loginForm from './components/loginForm';
import signUpForm from './components/signUpForm';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import patients from './components/patients'
import dashboard from './components/dashboard'
import patientsLogin from './components/patientsLogin'
import {Navbar,NavDropdown} from 'react-bootstrap';
import Styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons";


const StyledNav = Styled.nav`
   padding-bottom: 5vh;
`


function App() {
  return (
    <Container className="App">
      <StyledNav>
     
      <Navbar bg="dark" variant="dark">
       
         <Navbar.Brand href="/dashboard">MedicFile</Navbar.Brand>
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
       <Route exact path = "/dashboard" component={dashboard} /> 
       <Route exact path = "/PatientsLogin" component={patientsLogin}/>
       <Route exact path = "/patients/:id" component={patients} />
    </Container>
  );
}

export default App;
