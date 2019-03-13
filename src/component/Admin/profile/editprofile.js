import React, { Component } from 'react';
import {Form,Button, Container} from 'react-bootstrap'
class Editprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handlechange=(e)=>{
        this.setState({ [e.target.name]:e.target.value})
    }
    render() { 
        return (  <Container>
                <Form style={{    width: '78%' , marginLeft: "11%"}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={this.handlechange} name='Firstname'  type="text" placeholder="First Name" />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={this.handlechange} name='Lasttname'  type="text" placeholder="Last Name" />
                            <Form.Label>Your Image</Form.Label>
                            <Form.Control onChange={this.handlechange} name="monImage"  type="file" accept="image/*" />
                        </Form.Group>
                </Form>
            </Container> );
    }
}
 
export default Editprofile;