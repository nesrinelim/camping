import React, { Component } from 'react';
import {Container} from 'react-bootstrap'

import NavbarMenu from './navbar_menu'
import Slider from './slider';
import Story from './story'
import Article from './article'
import Footer from './footer'

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
                <Story/>
                <Article/>
                <Footer />
                
            
            </Container>
             
        </div> );
    }
}
 
export default Home;