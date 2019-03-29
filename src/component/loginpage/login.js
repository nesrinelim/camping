import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from "mdbreact";
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
class Login extends React.Component {
  state = {
    email_: "",
    password_: "",tab_admin:[],tab_user:[]
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.find_user_admin()
  };
    find_user_admin=()=>{
      axios.get(`/user/${this.state.email_}`)
        .then((res)=>{Object.values(res.data).length !==0 ? this.setState({tab_user:res.data,pathh:'/user'},()=>this.props.get_id(this.state.tab_user._id)) 
       :
        axios.get(`/profile/${this.state.email_}`)
        .then(res=>{Object.values(res.data).length !==0 ?this.setState({tab_admin:(res.data),pathh:'/admin1'}):this.setState({pathh: 'nnn'})},()=>this.props.get_id(this.state.tab_admin._id))
        // if(this.state.tab_user.length !==0)  
        //   this.setState({pathh:'/admin1'}) 
        })
    }
  render() {
    return (
      <div>
        <br/>
        
<img src="https://static.wixstatic.com/media/ff6bf6_6cb3f5967ada4c26a9401daa5cd39d2f.png/v1/fill/w_155,h_58,al_c,q_80,usm_0.66_1.00_0.01/ff6bf6_6cb3f5967ada4c26a9401daa5cd39d2f.webp"></img>
<h1 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Login </h1>

      
      {/* sign in */}
        <Container>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
         <MDBRow style={{ justifyContent: "center"}}>
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
                  <a href="#!" className="pink-text font-weight-bold">
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
              placeholder="Your Email address" style={{color:"white"}}
              required />
             

             

              <MDBInput label="Your password" group  validate 
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
                 <Link to={`${this.state.pathh}`}> <MDBBtn
                    color="pink"
                    rounded
                    // onClick={this.find_user_admin}
                    className="btn-block z-depth-1"
                    type="submit"
                  >
                    Sign in
                  </MDBBtn></Link>
                </div>
              </MDBRow>
              <MDBCol md="12">
                <p className="font-small white-text d-flex justify-content-end">
                 Don't have an account?
                  <a href="/signup" className="pink-text ml-1 font-weight-bold">
                    sign up
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
        </form>
        <br/>
       {/* <button onClick={this.find_user_admin}>ok</button> */}
        </Container>
      </div>
    );
  }
}

export default Login;