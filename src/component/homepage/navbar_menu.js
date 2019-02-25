import React, { Component } from 'react';
import { Nav,Button,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'


class NavbarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
                    <Nav.Link href="#features">ACTIVITIES</Nav.Link>
                    <Nav.Link href="#pricing">CONTACT US</Nav.Link>
            </Nav>
            <Nav >
                    <Button variant="outline-light">
                        <Link to='/signin' style={{color:'white'}}>SIGN IN </Link> 
                    </Button>
            </Nav>   
            </Navbar.Collapse>     
     </Navbar>
     
        </div> );
    }
}
 
export default NavbarMenu;