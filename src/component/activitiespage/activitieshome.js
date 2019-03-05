import React, { Component } from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import {connect} from 'react-redux'

import RegionFilter from './region_filtr'
import Listactivity from './listactivity';


class Homeactivities extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
   
    render() { 
        return ( <div style={{backgroundColor:'white'}}>
            <RegionFilter/>
            <Container>
            
             <Row className="option_filtr">
                <Col className="option opt"> <img src="https://img.icons8.com/color/52/000000/select-all.png"/> <h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>All the Activities </h5></Col>
                <Col className="option"> <img src="https://img.icons8.com/color/52/000000/trekking.png"/>  <h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Randonnée</h5></Col>
                <Col className="option" ><img src="https://img.icons8.com/color/52/000000/camping-tent.png"/><h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Camping</h5></Col>
                <Col className="option"> <img src="https://img.icons8.com/color/52/000000/windsurfing.png"/> <h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Balade en mer</h5></Col>
                <Col className="option">  <img src="https://img.icons8.com/color/52/000000/horse.png"/> <h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Equitation</h5></Col>
                <Col> <img src="https://img.icons8.com/color/52/000000/running.png"/>  <h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Running</h5></Col>
                
                </Row>
           
                
                <Listactivity/>
                </Container>
        </div> );
    }
}

 
export default  Homeactivities;