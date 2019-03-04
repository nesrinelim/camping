import React, { Component } from 'react';
import { Nav,Button,Navbar,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'


class NavbarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
     <Navbar className="navbar" collapseOnSelect expand="lg"  fixed="top">
     <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
                    <Nav.Link href="/activity">ACTIVITIES</Nav.Link>
                    <Nav.Link href="/contact">CONTACT US</Nav.Link>
                    <Nav.Link to="/login" >LOGIN </Nav.Link> 
            </Nav>
              
            </Navbar.Collapse>  
            </Container>   
     </Navbar>
     
     );
    }
}
 
export default NavbarMenu;