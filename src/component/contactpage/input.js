import React, { Component } from "react";
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

class TextareaPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendForm = () => {
    fetch('https://some/url', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err));
  }

  render() {
    return (
      <MDBCol md="4">
        <MDBCard>
          <MDBCardBody>
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="name"
                  value={this.state.name}
                  onInput={this.handleInput}
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  name="email"
                  value={this.state.email}
                  onInput={this.handleInput}
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Your message"
                  icon="pen"
                  name="message"
                  value={this.state.message}
                  onInput={this.handleInput}/>
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan" onClick={this.sendForm}>
                  Send Message
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default TextareaPage;