import React, { Component } from 'react';
import {Link} from "react-router-dom"
import {Form,Button, Container,Col} from 'react-bootstrap'
import axios from 'axios'

class Add_act_admin extends Component {
    constructor(props) {
        super(props);
        this.state = { typeAct:'',
                        descriptAct:'',
                       priceAct:'',
                       nbr_pplace:'',
                       image:'',
                       title:'',
                       eventorganizer:'',
                       position:'',
                       visiblity:true,
                       datein:'',
                       dateout:''
                        }
    }
    addact=()=>{
        axios.post('/addActivities',{...this.state})
    }
    handlechange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    render() { 
        return ( <Container >
    
            <Form style={{   padding:'50px',background:'url(https://images.pexels.com/photos/1580329/pexels-photo-1580329.jpeg?cs=srgb&dl=boulder-bowl-daylight-1580329.jpg&fm=jpg?dl&fit=crop&crop=entropy&w=640&h=853)', width: '78%' , marginLeft: "20%"}}>
            <br/>
            <Form.Group controlId="formBasicEmail" >
                         
     <Form.Group as={Col} controlId="formGridActivity">
      
      <Form.Control as="select" style={{marginTop:'20px',padding:'5px',width:" 25%",marginLeft: "35%"}}name='typeAct' onChange={this.handlechange}  value={this.state.typeAct}placeholder="TypeOf Activity">
      <option>TypeOf Activity</option>
      <option>Hiking</option>
     <option>Camping</option>
    <option>Boat Trip</option>
    <option>Horse Riding</option>
    <option>Running</option>
      </Form.Control>
    </Form.Group>
                         <Form.Control style={{marginTop:'20px',padding:'5px' ,backgroundColor: 'rgba(232, 224, 83, 0.8)'}}name='descriptAct' onChange={this.handlechange} value={this.state.descriptAct} type="text" placeholder="Description Of Activity" />
                         <Form.Control style={{marginTop:'20px',padding:'5px',backgroundColor: 'rgba(232, 224, 83, 0.8)'}}name='priceAct' onChange={this.handlechange}  value={this.state.priceAct} type="text" placeholder="Price" />
                         <Form.Control style={{marginTop:'20px',padding:'5px',backgroundColor: 'rgba(232, 224, 83, 0.8)'}}name='nbr_pplace' onChange={this.handlechange}  value={this.state.nbr_pplace} type="text" placeholder="Availble Place" />
                         <Form.Control style={{marginTop:'20px',padding:'5px',backgroundColor: 'rgba(232, 224, 83, 0.8)'}}name='image' onChange={this.handlechange} value={this.state.image} type="text" placeholder="Picture" />
                         <Form.Control style={{marginTop:'20px',padding:'5px',backgroundColor: 'rgba(232, 224, 83, 0.8)'}}name='title' onChange={this.handlechange} value={this.state.title} type="text" placeholder="Title" />
                         <Form.Control style={{marginTop:'20px',padding:'5px',backgroundColor: 'rgba(232, 224, 83, 0.8)'}}name='eventorganizer' onChange={this.handlechange}  type="text" placeholder="Event organizer" />
                         <Form.Group as={Col} controlId="formGridPosition">
                         <Form.Control as="select" style={{marginTop:'20px',padding:'5px',width:" 25%",marginLeft: "35%"}} name='position' onChange={this.handlechange} value={this.state.position} type="text" placeholder="Position">
                         <option >Sélectionnez position...</option>
  
        <option >Grand Tunis</option>

        <option >Bizerte</option>
        <option >Cap Bon</option>
        <option >Mahdia</option>
        <option >Monastir</option>
        <option>Région Centre</option>
        <option >Région Ouest</option>
        <option>Région Sud</option>
        <option >Sfax</option>
        <option>Sousse</option>
        </Form.Control>
        </Form.Group>
                         <Form.Control style={{marginTop:'20px',padding:'5px',backgroundColor: 'rgba(232, 224, 83, 0.8)'}} name='visiblity' onChange={this.handlechange}  value={this.state.visiblity} type="text" placeholder="visiblity" />
                         <Form.Control style={{marginTop:'20px',padding:'5px',backgroundColor: 'rgba(232, 224, 83, 0.8)'}}name='datein' onChange={this.handlechange} value={this.state.datein} type="text" placeholder="check in" />
                         <Form.Control style={{marginTop:'20px',padding:'5px',backgroundColor: 'rgba(232, 224, 83, 0.8)'}}name='dateout' onChange={this.handlechange} value={this.state.dateout} type="text" placeholder="check out" />
                         </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.addact}>
                        Add
                    </Button>
                   <Link to ="/admin1/list_act"><Button variant="primary">
                        Cancel
                    </Button>
                    </Link>
            </Form>
            </Container>);    
    }
}
 
export default Add_act_admin;