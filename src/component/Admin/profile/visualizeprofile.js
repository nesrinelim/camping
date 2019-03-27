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
        return ( <div  style={{width: '78%' , marginLeft: "18%" }}>
        <h1>Info Admin</h1>
        <div style={{display:'flex',alignItems: 'center'}}>
        <div style={{border :'1px solid #33b5e5',borderRadius:'5px' ,borderRight:' none', padding:'1%', textAlign:'start'}}>
            
            <img src={this.state.inputfile} height='250px' width='250px' />
                <div style={{display:'flex'}}>
            <i class="material-icons" style={{fontSize:'18px',color:'#33b5e5',padding:'1px'}}>local_phone</i> <h5> Contact Info </h5></div>
            <br/><h6>22 222 222 / 33 333 333</h6>
        </div>
            <Card border="info" style={{ width: '50rem',marginTop:' 0px',height: '336px' }}>
   <div style={{display:'flex'}}> <Card.Header style={{ width: '25rem' }}>My Profile</Card.Header><Card.Header style={{ width: '25rem' }}>Password</Card.Header></div>
    
    <Card.Body>
      <br/>
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
  </div>
        </div> );
    }
}
 
export default Visualize_profile;