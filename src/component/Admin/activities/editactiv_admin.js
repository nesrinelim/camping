import React, { Component } from 'react';
import Axios from 'axios';

import {Form,Button, Container} from 'react-bootstrap'
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
        Axios.put(`/editactivity/${this.state._id}`,{typeAct:this.state.typeAct,descriptAct:this.state.descriptAct})
        
    }
    handlechange=(event)=>{
        this.setState({ [event.target.name] : event.target.value})
    }
    render() { 
        return ( <Container >
            <Form style={{    width: '78%' , marginLeft: "11%"}}>
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
            </Form>
            </Container> );
    }
}
 
export default Editact;