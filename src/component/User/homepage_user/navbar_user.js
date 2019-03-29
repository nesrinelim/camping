import React, { Component } from 'react';
import { Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import {Link}from 'react-router-dom'
import axios from 'axios'
class Navbar_user extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    saveToLocalStorage=(state)=> {
      try {
         const serializedState = JSON.stringify(state)
           localStorage.setItem('state', serializedState)
          } catch(e) {
            console.log(e)
              }
          }
    loadFromLocalStorage=()=> {
      try {
       const serializedState = localStorage.getItem('state')
       if (serializedState === null) return undefined
       return JSON.parse(serializedState)
        } catch(e) {
         console.log(e)
         return undefined
           }
         }
         componentDidUpdate(){
          if(this.props.id !==''){axios.get(`/userlist/${this.props.id}`)
          
          .then((res)=>this.setState({...res.data}))
          
          .then( this.saveToLocalStorage(this.props.id))
          .catch((err)=>alert(err))
          
          }
          // else {
    
        }
        componentDidMount(){
          // if (this.props.id ==='')
          {axios.get(`/userlist/${this.loadFromLocalStorage()}`)
          
          .then((res)=>this.setState({...res.data}))
          .catch((err)=>alert(err))}
        }
    render() { 
        return (<Navbar className="navbar" collapseOnSelect expand="lg"  fixed="top">
        <Container>
               <Navbar.Brand href="#home" style={{color:"#2B3A67",fontSize:"30px",fontWeight:"bold"}}>Farhoud.tn</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                   
                       <Nav.Link href="/user">HOME</Nav.Link>
                       <Nav.Link href="/user/aboutus">ABOUT US</Nav.Link>
                       <Nav.Link href="/user/activity">ACTIVITIES</Nav.Link>
                       <Nav.Link href="/user/contact">CONTACT US</Nav.Link>
                       
               </Nav>

               <NavDropdown title={this.state.fname+ ' '+this.state.lname} id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1" > <Link to='/user/profile'><i class="fa fa-user fa-fw"></i> My profile</Link></NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2"><Link to='/user/reservation'><i class="fa fa-calendar-check-o"></i> Reservation</Link></NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4"><Link to='/'><i class="fas fa-sign-out-alt"></i> Logout</Link></NavDropdown.Item>
        </NavDropdown>
 
              
                 
               </Navbar.Collapse>  
               </Container>   
        </Navbar>  );
    }
}
 
export default Navbar_user;