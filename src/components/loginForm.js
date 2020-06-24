import React from 'react';
import {Route} from 'react-router-dom';
import dashboard from './dashboard';
import {Form,Row,Col,Container,Button} from 'react-bootstrap';


class loginForm extends React.Component {
    
   constructor(props) {
       super(props)
       this.state = {
           name: '',
           medicid: '',
           password: '',
       };

     
   }

  handleChange =  (e) => {
    this.setState({   [e.target.name]: e.target.value  });
    
  }
  clearForm = (e) => {
     e.preventDefault();
     this.setState({ ...this.state, name: '',medicid:'', password:''})
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
                            id="passwordIdInput"
                            name="password"
                            type="password" 
                            value={this.state.password}
                            onChange={e => this.handleChange(e)}
                          />
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

                <Route exact path = "/dashboard" component={dashboard} />

            </Container>
        )
    }
}

export default loginForm;