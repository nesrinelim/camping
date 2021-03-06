import React, { Component } from 'react';
import { Nav,Button,Navbar,Container} from 'react-bootstrap';
import {Link}from 'react-router-dom'


class NavbarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
     <Navbar className="navbar" collapseOnSelect expand="lg"  fixed="top">
     <Container>
            <Navbar.Brand href="#home" style={{color:"#2B3A67",fontSize:"30px",fontWeight:"bold"}}>Farhoud.tn</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
                    <Nav.Link href="/activity">ACTIVITIES</Nav.Link>
                    <Nav.Link href="/contact">CONTACT US</Nav.Link>
                    
            </Nav>
            <Nav >
            <Link to="/login"  style={{color:'pink',borderRadius:'2px',border : '1px solid pink',padding:'8%'}} >SIGN IN </Link> 
            </Nav>
              
            </Navbar.Collapse>  
            </Container>   
     </Navbar>
     
     );
    }
}
 
export default NavbarMenu;