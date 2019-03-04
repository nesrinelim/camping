import React, { Component } from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import {connect} from 'react-redux'

import Header from './header'
import Listactivity from './listactivity';


class Homeactivities extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
   
    render() { 
        return ( <div style={{backgroundColor:'white'}}>
            <Header/>
            <Container>
                
                <Listactivity/>
                </Container>
        </div> );
    }
}

 
export default  Homeactivities;