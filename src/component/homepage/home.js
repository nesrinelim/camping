import React, { Component } from 'react';
import {Container} from 'react-bootstrap'


import Slider from './slider';
import Story from './story'
import Article from './article'
import Feedback from './feedback';
import Comment from './comment'
import './style/home.css'
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
                <Feedback/>
                <Comment/>
            
            </Container>
             
        </div> );
    }
}
 
export default Home;