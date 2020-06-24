import React from 'react'
import {Route,Link} from 'react-router-dom';
import loginForm from './loginForm';
import signUpForm from './signUpForm';
import styled from 'styled-components';

const Wrapper = styled.div`
   
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   text-align: center;
   padding-bottom: 2vh; 
   height: 100%;
   color: white;
`
const Styledh1 = styled.h1`
   display: flex;
   justify-content: center;
   font-weight: bold;
   box-sizing: border-box;
   padding-bottom: 4vh;
   margin-bottom: 2vh;
`
const LinkWrapper = styled.div`
   display: flex;
   justify-content: center;
  
`
const StyledButton = styled.button`
   border-radius: 0.8vh;
   color: black;
   
`
const Span = styled.span`
   display: flex;
  
   font-size: 4.6vh;
   box-sizing: border-box;
   padding: 0 1vh 0 1vh;
`
 


function Header () {
    return (
        <Wrapper>
             
            <Styledh1>
                    MedicFile
            </Styledh1>
            <LinkWrapper>
              <Link to="/login" >
                <StyledButton>
                    Login
                </StyledButton> 
              </Link>
              <Span> </Span>
              <Link to="signUp">
                <StyledButton>
                    SignUp
                </StyledButton>   
              </Link>
            </LinkWrapper>
            
            <Route exact path = "/login" component={loginForm} />
            <Route exact path = "/signUp" component={signUpForm} />
      </Wrapper>

       
    );
}

export default Header;