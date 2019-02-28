import React, { Component } from 'react';
import {Col,Row,Container} from 'react-bootstrap'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
             <div style={{backgroundColor:'#535151', color:'white'}}>
             <Container>
            <Row>
              <Col>
                    <div>
                        <br/>
                        <h6>OUR ADDRESS</h6><br/>
                        <label>sousse</label><br/>
                        <label>sousse</label>
                    </div>
              </Col>
              <Col>
                 <div>
                    <br/>
                    <h6>CONTACT US</h6><br/>
                    <label>TEL:122333664458</label><br/>
                    <label>Email: camping@camping</label>
                 </div>
              </Col>

              <Col>
                 <div>
                 <br/>
                 <h6>WE ACCEPT</h6><br/>
                 <div className="img_ftr">
                
                    <img  src='https://png.pngtree.com/element_our/png_detail/20180731/visa-logo-icon-png_44633.png' width='50px' height='50px'/>
                    <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gMLujMoMAWJKdTKK3Z6Usdxz7VHpw9-NBNiq6NV_2g0A56t5' width='35px' height='25px'/>
                    <img  src='https://www.sellerie-cassou.fr/wp-content/uploads/2018/06/paypal-784404_640.png' width='35px' height='25px'/>
                 </div>
                 </div>
              </Col>
             
              <Col>
              <div>
               <br/>
               <h6>Follow Us</h6><br/>
               <i className="fab fa-facebook-f white-text mr-4"> </i><i className="fab fa-twitter white-text mr-4"> </i><i className='fab fa-instagram white-text mr-4'></i>
               </div>
              </Col>
            </Row>
            <div style={{alignItems:'center'}} >
           <hr style={{backgroundColor:'gray',width:'90%'}}/>
           
           &copy; {new Date().getFullYear()} Copyright : camping.com
           
           </div>
           </Container>
            </div>

           
        </div> );
    }
}
 
export default Footer;