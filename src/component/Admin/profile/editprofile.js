import React, { Component } from 'react';
import {Form,Button, Container} from 'react-bootstrap'
import axios from 'axios'
class Editprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {  firstname:" halima",
                        lasttname:'nesrine' }
    }
    handlechange=(e)=>{
        this.setState({ [e.target.name]:e.target.value})
    }

   
    handlechang2=(e)=>{
    
    let files=e.target.files
    // to read the file
    let reader= new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload=(e)=>{
        console.log('imageee',e.target.result)
        this.setState({inputfile:e.target.result})
    }
    
}
editprofile=()=>{
    axios.put(`/editprofile/5c8c1739726aaf1d10e7a2f1`,{firstname:this.state.firstname,lasttname:this.state.lasttname,inputfile:this.state.inputfile})
}
    render() { 
        return (  <Container>
                <Form style={{    width: '78%' , marginLeft: "11%"}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={this.handlechange} name='firstname'  type="text" value={this.state.firstname} placeholder="First Name" />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={this.handlechange} name='lasttname'  type="text" value={this.state.lasttname} placeholder="Last Name" />
                            <Form.Label>Your Image</Form.Label>
                            <Form.Control  onChange={this.handlechang2}  name="inputfile"  type="file" accept="image/*"   />
                            <Button onSubmit={this.handleSubmit} >Edit </Button>
                        </Form.Group>
                </Form>
                 <img src={this.state.inputfile} width='10%'height='10%' />


            </Container> );
    }
}
 
export default Editprofile;