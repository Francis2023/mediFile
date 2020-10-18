import React from 'react';
import {Route} from 'react-router-dom';
import {Form,Row,Col,Container,Button} from 'react-bootstrap';
import nurseDashboard from './nurseDashboard';
import { Label } from 'react-bootstrap';

class newPatient extends React.Component {
    
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
            <h3 className="welcomeLine"> Welcome to our Facility</h3>
            <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group as={Row}>       
               <Col >
                       <Form.Label>Frist Name</Form.Label>
                       <Form.Control 
                           name="firstName"
                           type="text"
                           value={this.state.firstName}
                           onChange={e => this.handleChange(e)}
                       />
                 </Col>
                 <Col sm={3}> 
                       <Form.Label>Middle Name</Form.Label>
                       <Form.Control 
                           name="middleName"
                           type="text"
                           value={this.state.middleName}
                           onChange={e => this.handleChange(e)}
                       />
                 </Col>
                 <Col> 
                       <Form.Label>Last Name</Form.Label>
                       <Form.Control 
                           name="lastName"
                           type="text"
                           value={this.state.lastName}
                           onChange={e => this.handleChange(e)}
                       />
                 </Col>
           </Form.Group>
                <Form.Group>
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control 
                        name="streetAddress"
                        placeholder="30th street"
                        type="text"
                        value={this.state.streetAddress}
                        onChange={e => this.handleChange(e)}
                    />
                </Form.Group>
                <Form.Group as={Row}>   
                    <Col >
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                                name="city"
                                placeholder="Monrovia"
                                type="text"
                                value={this.state.city}
                                onChange={e => this.handleChange(e)}
                            />
                      </Col>
                      <Col> 
                            <Form.Label>County</Form.Label>
                            <Form.Control 
                                name="county"
                                placeholder="Montserrado"
                                type="text"
                                value={this.state.county}
                                onChange={e => this.handleChange(e)}
                            />
                      </Col>
                      <Col> 
                            <Form.Label>Country</Form.Label>
                            <Form.Control 
                                name="country"
                                placeholder="Liberia"
                                type="text"
                                value={this.state.country}
                                onChange={e => this.handleChange(e)}
                            />
                      </Col>
                </Form.Group> 
                <Form.Group as={Row}> 
                    <Col sm={4} >
                    <Form.Label>Cellphone</Form.Label>
                    <Form.Control 
                        name="cellphone"
                        placeholder="0774-000000"
                        type="tel"
                        value={this.state.streetAddress}
                        onChange={e => this.handleChange(e)}
                    />
                    </Col> 
                    <Col>
                        <Form.Label>Email (Optional)</Form.Label>
                        <Form.Control 
                            name="email"
                            placeholder="name@example.com"
                            type="text"
                            value={this.state.email}
                            onChange={e => this.handleChange(e)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>Sex : </Form.Label>
                    
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={this.state.male} onChange={e => this.handleChange(e)}/>
                        <label class="form-check-label" for="inlineCheckbox1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value={this.state.female} onChange={e => this.handleChange(e)}/>
                        <label class="form-check-label" for="inlineCheckbox2">Female</label>
                    </div>
                
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Date of Birth :</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            name="birthday"
                            type="date"
                            placeholder="mm/dd/yyyy"
                            value={this.state.birthday}
                            onChange={e => this.handleChange(e)}
                        />
                    </Col>
                </Form.Group>     
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Marital Status : </Form.Label>
                </Form.Group>
            </Form>

            <Route exact path = "/nurseDashboard" component={nurseDashboard} />

        </Container>

       
        )
       
    }
}

export default newPatient;