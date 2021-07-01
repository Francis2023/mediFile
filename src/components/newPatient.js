import React from 'react';
import {Route} from 'react-router-dom';
import {Form,Row,Col,Container,Button} from 'react-bootstrap';
import nurseDashboard from './nurseDashboard';
import { Label } from 'react-bootstrap';
import { withTheme } from 'styled-components';

class newPatient extends React.Component {
    
   constructor(props) {
       super(props)
       this.state = {
           firstName: '',
           middleName: '',
           lastName: '',
           streetAddress: '',
           city: '',
           county: '',
           country: '',
           cellphone: '',
           email: '',
           sex: ' ',
           birthday: '',    
           maritalStatus: '',
           emergencyContactName: '',
           emergencyContactRelationship: '',
           emergencyContactNumber: ''
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
    console.log("Submitted")
  }

    render() {
        return (
            <Container className="center" >
            <h3 style={{textAlign:'center', paddingBottom:'2rem' }}> Welcome to our Facility</h3>
            <Form onSubmit={e => this.handleSubmit(e)}>
            <h5>Personal Information</h5>
            <hr style={{backgroundColor:"#ffffff"}}/>
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
                        value={this.state.cellphone}
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
                    <Col sm={3}>
                        <Form.Control
                            as="select"
                            defaultValue="Male"
                            type="text"
                            id="sexInput" 
                            name="sex"
                            value={this.state.sex}
                            onChange={e => this.handleChange(e)}
                        >
                            <option>Choose ...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </Form.Control>
                    </Col>
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
                    <Col sm={4}>
                        <Form.Control
                            as="select"
                            defaultValue="Single"
                            type="text"
                            id="maritalStatusInput" 
                            name="maritalStatus"
                            value={this.state.maritalStatus}
                            onChange={e => this.handleChange(e)}
                        >
                            <option>Choose ...</option>
                            <option>Married</option>
                            <option>Single</option>
                            <option>Divorced</option>
                        </Form.Control>
                    
                    </Col>
                </Form.Group>
                <h5 className="newPatientSubH"> Emergency Contact</h5>
                <hr  style={{ color: '#FFFFFF',backgroundColor: '#FFFFFF',height: .5,borderColor : '#000000'}}/>
                <Form.Group as={Row}>       
                    
                       <Form.Label column sm={3}>Contact Name : </Form.Label>
                       <Col sm={6}>
                       <Form.Control 
                           name="emergencyContactName"
                           type="text"
                           value={this.state.emergencyContactName}
                           onChange={e => this.handleChange(e)}
                       />
                        </Col>
                 </Form.Group>
                 <Form.Group as={Row}>       
                    
                    <Form.Label column sm={3}>Relationship : </Form.Label>
                    <Col sm={6}>
                    <Form.Control 
                        name="emergencyContactRelationship"
                        type="text"
                        placeholder="Ex. Mother"
                        value={this.state.emergencyContactRelationship}
                        onChange={e => this.handleChange(e)}
                    />
                    </Col>
              </Form.Group>
              <Form.Group as={Row}> 
                    
                    <Form.Label column sm={3}>Cellphone</Form.Label>
                    <Col sm={6} >
                    <Form.Control 
                        name="emergencyContactNumber"
                        placeholder="0774-000000"
                        type="tel"
                        value={this.state.emergencyContactNumber}
                        onChange={e => this.handleChange(e)}
                    />
                    </Col> 
                </Form.Group>
                <h5 > Medical History</h5>
                <hr style={{backgroundColor:"#ffffff"}} />
                 
                {/* ADD MEDICAL HISTORY FORM HERE*/}

                <Form.Group as={Row} style={{display:'flex', justifyContent:'center'}} >
                    <Col sm={3} >
                      <Button type="submit" value="Submit"   >   
                        Submit        
                      </Button>
                    </Col>
                    <Col sm={3} >
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

export default newPatient;