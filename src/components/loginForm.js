import React from 'react';
import {Route} from 'react-router-dom';
import nurseDashboard from './nurseDashboard';
import {Form,Row,Col,Container,Button} from 'react-bootstrap';


class loginForm extends React.Component {
    
   constructor(props) {
       super(props)
       this.state = {
           name: '',
           medicid: '',
           password: '',
           profession: ''
       };

     
   }

  handleChange =  (e) => {
    this.setState({   [e.target.name]: e.target.value  });
    
  }
  clearForm = (e) => {
     e.preventDefault();
     this.setState({ ...this.state, name: '',medicid:'', password:'',profession:''})
  }

  handleSubmit = (e,prof) => {
    e.preventDefault();
    this.clearForm(e);
    console.log(this.state)
    this.props.history.push(`${prof}/dashboard`)
  
  }
 
    render() {
        
        return (
         
            <Container className="center" >
                <Form onSubmit={e => this.handleSubmit(e,this.state.profession)}>
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
                    <Form.Group as={Row} >
                      <Form.Label column sm={2}>
                        Password
                      </Form.Label>
                      <Col sm={10}>
                          <Form.Control
                            id="passwordInput"
                            name="password"
                            type="password" 
                            value={this.state.password}
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
                            defaultValue="Nurse"
                            id="professionInput" 
                            name="profession"
                            type="text"
                            value={this.state.profession}
                            onChange={e => this.handleChange(e)}
                          >
                            <option>Choose:</option>
                            <option>Doctor</option>
                            <option>Nurse</option>
                            <option>Lab Technician</option>
                            <option>Administrator</option>
                            <option>Accountant</option>
                          </Form.Control>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Col sm={{span: 2, offset: 2}}>
                          <Button type="submit" value="Submit" >
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

               {/* <Route exact path = "/Dashboard" component={nurseDashboard} /> */}

            </Container>
        )
    }
}

export default loginForm;