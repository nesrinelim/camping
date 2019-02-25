import React, { Component } from 'react';
import {Col,Row} from 'react-bootstrap'
import {Link}  from 'react-router-dom'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
             <div style={{backgroundColor:'#212121', color:'gray'}}>
            <Row>
              
              <Col>
              <hr  style={{width: "60px" , backgroundColor:'white'}} />
              <h6 style={{color:'white'}}>LINK2</h6>
              <hr  style={{width: "60px" , backgroundColor:'white'}} />
             
               <ul style={{listStyleType:'none',textAlign: "start"}} >
                  <li>Link3@gmail.com  </li>
               </ul>
              </Col>
              <Col>
              <hr  style={{width: "60px" , backgroundColor:'white'}} />
              <h6 style={{color:'white'}}>OUR SERVICES</h6>
              <hr  style={{width: "60px" , backgroundColor:'white'}} />
               <ul style={{listStyleType:'none',textAlign: "start",textAlign: "start"}}>
                  <li >Camping </li>
                  <li>Biking </li>
                  <li>Riding </li>
                  <li>Hiking </li>
               </ul>
              </Col>
              <Col>
              <hr  style={{width: "60px" , backgroundColor:'white'}} />
              <h6 style={{color:'white'}}>CONTACT</h6>
              <hr  style={{width: "60px" , backgroundColor:'white'}} />
               <ul style={{listStyleType:'none',textAlign: "start"}} >
                  <li><i className="fas fa-envelope mr-3"></i>Link3@gmail.com  </li>
                  <li><i className="fas fa-users mr-3"></i> our team</li> 
                  <li><i className='fas fa-map-marker-alt'></i> </li>
               </ul>
              </Col>
              <Col>
              <hr  style={{width: "60px" , backgroundColor:'white'}} />
              <h6 style={{color:'white'}}>FOLLOW US</h6>
              <hr  style={{width: "60px" , backgroundColor:'white'}} />
               
               <i className="fab fa-facebook-f white-text mr-4"> </i><i className="fab fa-twitter white-text mr-4"> </i><i className='fab fa-instagram white-text mr-4'></i>
              </Col>
              
            </Row>
            <div style={{alignItems:'center'}} >
           <hr style={{backgroundColor:'gray'}}/>
           
           &copy; {new Date().getFullYear()} Copyright : <Link to='/site' >camping.com</Link>
           
           </div>
            </div>

           
        </div> );
    }
}
 
export default Footer;