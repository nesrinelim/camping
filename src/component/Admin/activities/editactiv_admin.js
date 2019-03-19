import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {Form,Button, Container,Col} from 'react-bootstrap'
class Editact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        Axios.get('/activitieslist')
        .then(res=>{this.setState({...res.data.filter(el=>el._id == this.props.match.params._id)[0] })})
    }
    update=()=>{
        Axios.put(`/editactivity/${this.state._id}`,{typeAct:this.state.typeAct,descriptAct:this.state.descriptAct,nbr_pplace:this.state.nbr_pplace,priceAct:this.state.priceAct,image:this.state.image,title:this.state.title,eventorganizer:this.state.eventorganizer,position:this.state.position,visiblity:this.state.visiblity,datein:this.state.datein,dateout:this.state.dateout})
        
    }
    handlechange=(event)=>{
        this.setState({ [event.target.name] : event.target.value})
    }
    render() { 
        return ( <Container >
            {/* <Form style={{    width: '78%' , marginLeft: "11%"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>type of activitie</Form.Label>
                        <Form.Control name='typeAct' onChange={this.handlechange}  value={this.state.typeAct} type="text" placeholder="Normal text" />
                        <Form.Label>description</Form.Label>
                        <Form.Control name='descriptAct' onChange={this.handlechange} value={this.state.descriptAct} type="text" placeholder="Normal text" />
                        <Form.Label>price</Form.Label>
                        <Form.Control name='priceAct' onChange={this.handlechange}  value={this.state.priceAct} type="text" placeholder="Normal text" />
                        <Form.Label>nbr de place</Form.Label>
                        <Form.Control name='nbr_pplace' onChange={this.handlechange}  value={this.state.nbr_pplace} type="text" placeholder="Normal text" />
                        <Form.Label>url image</Form.Label>
                        <Form.Control name='image' onChange={this.handlechange} value={this.state.image} type="text" placeholder="Normal text" />
                        <Form.Label>title</Form.Label>
                        <Form.Control name='title' onChange={this.handlechange} value={this.state.title} type="text" placeholder="Normal text" />
                        <Form.Label>position</Form.Label>
                        <Form.Control name='position' onChange={this.handlechange} value={this.state.position} type="text" placeholder="Normal text" />
                        <Form.Label>check in</Form.Label>
                        <Form.Control name='datein' onChange={this.handlechange} value={this.state.datein} type="text" placeholder="Normal text" />
                        <Form.Label>check out</Form.Label>
                        <Form.Control name='dateout' onChange={this.handlechange} value={this.state.dateout} type="text" placeholder="Normal text" />

                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.update}>
                        Edit
                    </Button>
            </Form> */}
              <Form style={{    width: '78%' , marginLeft: "11%"}}>
            <br/>
            <Form.Group controlId="formBasicEmail" >
                         
     <Form.Group as={Col} controlId="formGridState">
      
      <Form.Control as="select" style={{marginTop:'20px',padding:'5px',width:" 25%",marginLeft: "35%"}}name='typeAct' onChange={this.handlechange}  value={this.state.typeAct}placeholder="TypeOf Activity">
      <option>TypeOf Activity</option>
      <option>Hiking</option>
     <option>Camping</option>
    <option>Boat Trip</option>
    <option>Horse Riding</option>
    <option>Running</option>
      </Form.Control>
    </Form.Group>
                         <Form.Control style={{marginTop:'20px',padding:'5px'}}name='descriptAct' onChange={this.handlechange} value={this.state.descriptAct} type="text" placeholder="Description Of Activity" />
                         <Form.Control style={{marginTop:'20px',padding:'5px'}}name='priceAct' onChange={this.handlechange}  value={this.state.priceAct} type="text" placeholder="Price" />
                         <Form.Control style={{marginTop:'20px',padding:'5px'}}name='nbr_pplace' onChange={this.handlechange}  value={this.state.nbr_pplace} type="text" placeholder="Availble Place" />
                         <Form.Control style={{marginTop:'20px',padding:'5px'}}name='image' onChange={this.handlechange} value={this.state.image} type="text" placeholder="Picture" />
                         <Form.Control style={{marginTop:'20px',padding:'5px'}}name='title' onChange={this.handlechange} value={this.state.title} type="text" placeholder="Title" />
                         <Form.Control style={{marginTop:'20px',padding:'5px',backgroundColor: 'rgba(232, 224, 83, 0.8)'}} name='eventorganizer' onChange={this.handlechange} value={this.state.eventorganizer} type="text" placeholder="Event organizer" />
                         <Form.Control style={{marginTop:'20px',padding:'5px'}} name='visiblity' onChange={this.handlechange}  value={this.state.visiblity} type="text" placeholder="visiblity" />
                         <Form.Control style={{marginTop:'20px',padding:'5px'}} name='position' onChange={this.handlechange} value={this.state.position} type="text" placeholder="Position" />
                         <Form.Control style={{marginTop:'20px',padding:'5px'}}name='datein' onChange={this.handlechange} value={this.state.datein} type="text" placeholder="check in" />
                         <Form.Control style={{marginTop:'20px',padding:'5px'}}name='dateout' onChange={this.handlechange} value={this.state.dateout} type="text" placeholder="check out" />
                         </Form.Group>
                         
                         <Link to ="/admin1/list_act"> <Button variant="primary" type="submit" onClick={this.update}>
                        Edit
                    </Button></Link>
                   <Link to ="/admin1/list_act"><Button variant="primary">
                        Cancel
                    </Button>
                    </Link>
            </Form>
            </Container> );
    }
}
 
export default Editact;