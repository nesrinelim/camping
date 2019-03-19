import React, { Component } from 'react';
import {Card,InputGroup,FormControl} from 'react-bootstrap'
import Axios from 'axios';
class Visualize_profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        Axios.get('/profileinfo')
        .then(res=>{this.setState({...res.data[0]})})
    }
    render() { 
        return ( <div  style={{    width: '78%' , marginLeft: "18%" ,display:'flex',alignItems: 'center'}}>

        <div style={{border :'1px solid black' , padding:'1%'}}>
            
            <img src={this.state.inputfile} height='250px' width='250px' />


        </div>
            <Card border="info" style={{ width: '50rem' }}>
   <div style={{display:'flex'}}> <Card.Header style={{ width: '25rem' }}>My Profile</Card.Header><Card.Header style={{ width: '25rem' }}>Header</Card.Header></div>
    
    <Card.Body>
      <Card.Title>Info Card Title</Card.Title>
      <Card.Text>
        
      <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text>Full name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl value={this.state.firstname +' '+ this.state.lastname} />
            
     </InputGroup>
        
     <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text>Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl value={this.state.email}/>
            
     </InputGroup>
     <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text>User name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl value={this.state.username}/>
            
     </InputGroup>

      </Card.Text>
    </Card.Body>
  </Card>
        </div> );
    }
}
 
export default Visualize_profile;