import React, { Component } from 'react';
import {  Row, Col,Nav,Form, Button,ButtonToolbar } from 'react-bootstrap';
import Axios from 'axios';
import MyVerticallyCenteredModal from './modal_img_user';


class Profileuser extends Component {
    state = { form1:false,
              form2:false,
              modalShow: false }

    componentDidMount(){
      Axios.get('/userlist')
      .then(res=>this.setState({...res.data.filter(el=>el._id == this.props.id)[0]}))
      // .then(res=>Axios.post('id_your_account',this.props.id))

    }
    render() { 
      let modalClose = () => this.setState({ modalShow: false })
        return (  <div style={{backgroundColor:'#f0f3f4',height:'95vh'}}>
        
       <h1>MY PROFILE</h1>
        
        <Row>
        <Col xs={6} md={4}>
        <div style={{ alignItems: 'center',display: 'flex',flexDirection: 'column', padding:'10%',width:' 81%',marginLeft:' 7%',backgroundColor:'white'}}>
     
     <div   style={{width: '134px', height: '134px', lineHeight: '134px'}}>
                                    <div >
        <ButtonToolbar>
        
        <i class="fa fa-camera fa  "  onClick={() => this.setState({ modalShow: true })} style={{position:"absolute", right: "171px", bottom:"261px"}}></i>   
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
          <img  width="100%"  alt="..." src="https://fabskill.com/assets/img/user-profile/grb-1552495533.jpg" style={{borderRadius: '66px'}}/>

       </div>
    </div>
    <br/><h4>{this.state.fname+ ' '+this.state.lname}</h4>
     </div><br/>

     <div style={{ alignItems: 'start',display: 'flex',flexDirection: 'column', padding:'2%',width:' 81%',marginLeft:' 7%',backgroundColor:'white',height:'68%'}}>
     
     <div   style={{width: '316px', height: '134px'}}>
          <h5 style={{textAlign:'start'}}>infos</h5> <hr/>
          <Row >
      <Col md={3} >    <i class="far fa-user"></i> </Col>
      <Col md={9} style={{textAlign:'start'}}> {this.state.fname+ ' '+this.state.lname}</Col>
    </Row>
    <Row >
      <Col md={3} >    <i class="far fa-envelope-open"></i>   </Col>
      <Col md={9} style={{textAlign:'start'}}> {this.state.email}</Col>
    </Row>
    <Row >
      <Col md={3} >   <i class="fas fa-gift"></i> </Col>
      <Col md={9} style={{textAlign:'start'}}> 11/11/1111</Col>
    </Row>
    <Row >
      <Col md={3} >    <i class="far fa-heart"></i> </Col>
      <Col md={9} style={{textAlign:'start'}}> Ksar Hellal</Col>
    </Row> <br/><hr/>
          <h5 style={{textAlign:'start'}}>contact</h5> <hr/>
    <Row >
      <Col md={3} >    <i class="fas fa-map-marker-alt"> </i> </Col>
      <Col md={9} style={{textAlign:'start'}}> Ksar Hellal</Col>
    </Row>
    <Row >
      <Col md={3} >    <i class="fas fa-phone"></i> </Col>
      <Col md={9} style={{textAlign:'start'}}> 33 333 333</Col>
    </Row>
    
          

       
    

    </div>
    {/* <br/><h4>Nesrine Limayem</h4> */}
     </div>
     
    </Col>
    <Col xs={12} md={8}>
    <Nav variant="tabs" defaultActiveKey="/home" style={{width:'39rem'}}>
  <Nav.Item>
    <Nav.Link eventKey="link-1" onClick={()=>this.setState({form1:true,form2:false })}>YOUR PERSONAL INFORMATION</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"onClick={()=>this.setState({form1:false ,form2:true })}>OTHER INFOS</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
<Form style={{width:'39rem',textAlign:'start' ,display:(this.state.form1) ?'block ' :'none'}}>
<Form.Group controlId="formGroupPassword">
    <Form.Label>First name</Form.Label>
    <Form.Control placeholder="First name" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Last name</Form.Label>
    <Form.Control placeholder="Last name" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
 <Button>Edit</Button>
</Form>
<Form style={{width:'39rem',textAlign:'start' ,display:(this.state.form2) ?'block ' :'none'}}>
{/* <Form.Group controlId="formGroupPassword"> */}
    {/* <Form.Label> name</Form.Label>
    <Form.Control placeholder="First name" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label> name</Form.Label>
    <Form.Control placeholder="Last name" />
  </Form.Group> */}
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button>Edit</Button>
</Form>
    </Col>
  </Row>
                
  
        
       
        </div>);
    }
}
 
export default Profileuser;