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
     <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
                    <Nav.Link href="#features">ACTIVITIES</Nav.Link>
                    <Nav.Link href="#pricing">CONTACT US</Nav.Link>
            </Nav>
            <Nav >
                    <Button variant="outline-primary">
                        <Link to='/'>LOGIN </Link> 
                    </Button>
            </Nav>        
     </Navbar>
        </div> );
    }
}
 
export default NavbarMenu;