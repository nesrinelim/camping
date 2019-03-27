import React, { Component } from 'react';
import {Form,Button, Container,Card,InputGroup,FormControl} from 'react-bootstrap'

import {Link} from 'react-router-dom'
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
    axios.put(`/editprofile/${this.state._id}`,{firstname:this.state.firstname , lastname:this.state.lastname, inputfile:this.state.inputfile, email:this.state.email})
.catch('error')
}
    render() { 
        return (  <div  style={{width: '78%' , marginLeft: "18%" }}>
        <h1>Info Admin</h1>
        <div style={{display:'flex',alignItems: 'center'}}>
        <div style={{border :'1px solid #33b5e5',borderRadius:'5px' ,borderRight:' none', padding:'1%', textAlign:'start'}}>
            
            <img src={this.state.inputfile} height='250px' width='250px' />
            <Form.Control  onChange={this.handlechang2}  name="inputfile"  type="file" accept="image/*"   />
                <div style={{display:'flex'}}>
            <i class="material-icons" style={{fontSize:'18px',color:'#33b5e5',padding:'1px'}}>local_phone</i> <h5> Contact Info </h5></div>
            <br/><h6>22 222 222 / 33 333 333</h6>
        </div>
            <Card border="info" style={{ width: '50rem',marginTop:' 0px',height: '363px' }}>
   <div style={{display:'flex'}}> <Card.Header style={{ width: '25rem' }}>My Profile</Card.Header><Card.Header style={{ width: '25rem' }}>Password</Card.Header></div>
    
    <Card.Body>
      <br/>
      <Card.Text>
        
      <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text>First name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={this.handlechange} name='firstname'  type="text" value={this.state.firstname} />
            
     </InputGroup>
       <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text>Last name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={this.handlechange} name='lastname'  type="text" value={this.state.lastname}/>
            
     </InputGroup> 
     <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text>Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={this.handlechange} name='email'  type="email" value={this.state.email}/>
            
     </InputGroup>
     

      </Card.Text>
      <Link to='/admin1/visualize_profile'> <Button onClick={this.editprofile} >Edit </Button></Link>
    </Card.Body>
  </Card>
  </div>
  
        </div>);
    }
}
 
export default Editprofile;