import React, { Component } from 'react';
import { Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import {Link}from 'react-router-dom'

class Navbar_user extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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

               <NavDropdown title="Nesrine Limayem" id="nav-dropdown">
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