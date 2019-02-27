import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from "mdbreact";
import {Container,Row,Col} from 'react-bootstrap'

class Login extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    email_: "",
    password_: "",
   
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <br/>
        
<img src="https://static.wixstatic.com/media/ff6bf6_6cb3f5967ada4c26a9401daa5cd39d2f.png/v1/fill/w_155,h_58,al_c,q_80,usm_0.66_1.00_0.01/ff6bf6_6cb3f5967ada4c26a9401daa5cd39d2f.webp"></img>
<h1 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Login </h1>
<br/>
        <Container>
          <Row>
            <Col>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
<MDBRow>
        <MDBCol md="4">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
              width: "28rem"
            }}
          >
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <strong>SIGN</strong>
                  <a href="#!" className="green-text font-weight-bold">
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
              
              <MDBInput label="Your first name" group type="text" validate 
              value={this.state.fname}
              name="fname"
              onChange={this.changeHandler}
              type="text"
              id="defaultFormRegisterNameEx1"
              className="form-control"
              placeholder="First name"
              required/>
              
              <MDBInput label="Your last name" group type="text" validate 
              value={this.state.lname}
              name="lname"
              onChange={this.changeHandler}
              type="text"
              id="defaultFormRegisterNameEx2"
              className="form-control"
              placeholder="First name"
              required/>
              <MDBInput label="Your email" group type="text" validate 
              value={this.state.email}
              onChange={this.changeHandler}
              type="email"
              id="defaultFormRegisterConfirmEx3"
              className="form-control"
              name="email"
              placeholder="Your Email address"
              required/>
              {/* <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                First name
              </label>
              <input className= "form-control validate"
                style={{background: "0",
                borderTop: "1px",
                borderLeft: "1px",
                borderRight: "1px"}}
                validate 
                group
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                champ vide.
              </div> */}

             

              <MDBInput label="Your password" group type="password" validate 
              value={this.state.password}
              name="password"
              onChange={this.changeHandler}
              type="password"
              id="defaultFormRegisterNameEx4"
              className="form-control"
              placeholder="First name"
              required/>
              <div className="md-form pb-3">
                
                <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
              </div>
              
              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="success"
                    rounded
                    
                    className="btn-block z-depth-1"
                    type="submit"
                  >
                    Sign up
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md="12">
                <p className="font-small white-text d-flex justify-content-end">
                  Have an account?
                  <a href="#!" className="green-text ml-1 font-weight-bold">
                    sign in
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
        </form>
        <br/>
        </Col>
      
      {/* sign in */}
        <Col>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
<MDBRow>
        <MDBCol md="4">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
              width: "28rem"
            }}
          >
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <strong>SIGN</strong>
                  <a href="#!" className="green-text font-weight-bold">
                    <strong> IN</strong>
                  </a>
                </h3>
              </div>
              
              
              
             
              <MDBInput label="Your email" group type="text" validate 
              value={this.state.email_}
              onChange={this.changeHandler}
              type="email"
              id="defaultFormRegisterConfirmEx3"
              className="form-control"
              name="email_"
              placeholder="Your Email address"
              required/>
             

             

              <MDBInput label="Your password" group type="password" validate 
              value={this.state.password_}
              name="password_"
              onChange={this.changeHandler}
              type="password"
              id="defaultFormRegisterNameEx4"
              className="form-control"
              placeholder="First name"
              required/>
              
              
              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="success"
                    rounded
                    
                    className="btn-block z-depth-1"
                    type="submit"
                  >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBRow>
              
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
        </form>
        
        </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Login;