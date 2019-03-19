import React, { Component } from 'react';
import {Form,Button, Container} from 'react-bootstrap'
import axios from 'axios'
class Editprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
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
componentDidMount(){
    axios.get('/profileinfo')
    .then(res=>{this.setState({...res.data[0]})})
}
editprofile=()=>{
    axios.put(`/editprofile/${this.state._id}`,{firstname:this.state.firstname , lastname:this.state.lastname, inputfile:this.state.inputfile})
.catch('error')
}
    render() { 
        return (  <Container>
                <Form style={{    width: '78%' , marginLeft: "11%"}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={this.handlechange} name='firstname'  type="text" value={this.state.firstname}  />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={this.handlechange} name='lastname'  type="text" value={this.state.lastname} />
                            <Form.Label>Your Image</Form.Label>
                            <Form.Control  onChange={this.handlechang2}  name="inputfile"  type="file" accept="image/*"   />
                            <Button onClick={this.editprofile} >Edit </Button>
                        </Form.Group>
                </Form>
                 <img src={this.state.inputfile} width='10%'height='10%' />


            </Container> );
    }
}
 
export default Editprofile;