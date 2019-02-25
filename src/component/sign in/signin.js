import React, { Component } from 'react';
import {MDBContainer,MDBRow,MDBCol,MDBInput,MDBBtn} from 'mdbreact'
import {Form,Button,Col} from 'react-bootstrap'

import NavbarMenu from '../homepage/navbar_menu';
import Footer from '../homepage/footer';




class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'',
    email:'' }
    }


   
    render() { 
        return ( <div>
            <NavbarMenu/>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Sign in</p>
                        <div className="grey-text">
                        <MDBInput
                            label="Type your email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                        />
                        <MDBInput
                            label="Type your password"
                            icon="lock"
                            group
                            type="password"
                            validate
                        />
                        </div>
                        <div className="text-center">
                       <a href='/'><MDBBtn>Login</MDBBtn></a> 
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
           </MDBContainer>
           <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name='name'
              />
             
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name='email'
              />
              <MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary"  >Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

   
           <Footer/>
        </div> );
    }
}
 
export default Signin;