import React, { Component } from 'react';
import {Container} from 'react-bootstrap'


import Slider from './slider';
import Story from './story'
import Article from './article'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Container>
            
                <Slider/>
                <Story/>
                <Article/>
                
                
            
            </Container>
             
        </div> );
    }
}
 
export default Home;