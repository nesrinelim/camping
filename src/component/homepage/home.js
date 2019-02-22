import React, { Component } from 'react';
import {Container} from 'react-bootstrap'

import NavbarMenu from './navbar_menu'
import Slider from './slider';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Container>
                <NavbarMenu/> 
                <Slider/>
            
            </Container>
             
        </div> );
    }
}
 
export default Home;