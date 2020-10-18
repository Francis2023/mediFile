import React from 'react';
import {Route} from 'react-router-dom';
import {Form,Row,Col,Container,Button} from 'react-bootstrap';
import nurseDashboard from './nurseDashboard';

class signUpForm extends React.Component {
    
   constructor(props) {
       super(props)
       this.state = {
           name: '',
           email: '',
           cellphone: '',
           medicid: '',
           password: '',
           profession: '',
           verifyPassword: ''
       }
   }

   handleChange =  (e) => {
    this.setState({   [e.target.name]: e.target.value  });
    
  }
  clearForm = (e) => {
     e.preventDefault();
     this.setState({ ...this.state, name: '',medicid:'', password:'', email:'', cellphone:''})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.clearForm(e);
    console.log(this.state)
    this.props.history.push('/dashboard')
  
  }

    render() {
        return (
            <Container className="center" >
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Group as={Row}  >
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                
                <Col sm={10} >
                    <Form.Control 
                      size="lg"
                      id="nameInput"
                      name="name"
                      type="text" 
                      value={this.state.name}
                      onChange={e => this.handleChange(e)}
                    />
                </Col>
                </Form.Group>
                <Form.Group as={Row}  >
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                
                <Col sm={10} >
                    <Form.Control 
                      size="lg"
                      id="emailInput"
                      name="email"
                      type="email" 
                      value={this.state.email}
                      onChange={e => this.handleChange(e)}
                    />
                </Col>
                </Form.Group>
                <Form.Group as={Row}  >
                <Form.Label column sm={2}>
                  Cellphone
                </Form.Label>
                
                <Col sm={10} >
                    <Form.Control 
                      size="lg"
                      id="cellphoneInput"
                      name="cellphone"
                      type="text" 
                      value={this.state.cellphone}
                      onChange={e => this.handleChange(e)}
                    />
                </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column sm={2} >
                    MedicId
                  </Form.Label>
                  <Col sm={10}>
                      <Form.Control 
                        id="medicIdInput"
                        name="medicid"
                        type="text" 
                        value={this.state.medicid}
                        onChange={e => this.handleChange(e)}
                      />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                      <Form.Label column sm={2}>
                        Profession:
                      </Form.Label>
                      <Col sm={4}>
                          <Form.Control 
                            as="select"
                            id="professionInput" 
                            name="profession"
                            value={this.state.profession}
                            onchange={e => this.handleChange(encodeURI)}
                          >
                            <option>Doctor</option>
                            <option>Nurse</option>
                            <option>Lab Technician</option>
                            <option>Administrator</option>
                            <option>Front Desk</option>
                          </Form.Control>
                      </Col>
                    </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column sm={2}>
                    Password
                  </Form.Label>
                  <Col sm={10}>
                      <Form.Control
                        id="passwordIdInput"
                        name="password"
                        type="password" 
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                      />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column sm={2}>
                    Verify Password
                  </Form.Label>
                  <Col sm={10}>
                      <Form.Control
                        id="verifyPasswordInput"
                        name="password"
                        type="password" 
                        value={this.state.verifyPassword}
                        onChange={e => this.handleChange(e)}
                      />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Col sm={{span: 2, offset: 2}}>
                      <Button type="submit" value="Submit"  >
                         
                        Submit
                     
                      </Button>
                    </Col>
                    <Col sm={{span: 2}} >
                      <Button  onClick={e => this.clearForm(e)} >
                        Clear
                      </Button>
                    </Col>
                </Form.Group>
            </Form>

            <Route exact path = "/nurseDashboard" component={nurseDashboard} />

        </Container>

       
        )
       
    }
}

export default signUpForm;