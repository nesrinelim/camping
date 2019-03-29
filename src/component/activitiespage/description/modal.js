import React, { Component } from 'react';
import {  Form, Button,Modal } from 'react-bootstrap';
class MyVerticallyCenteredModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
   
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
           <h3>TO RESERVE</h3>
<h1>SIGN IN / SIGN UP</h1>  
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Edit image</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  export default MyVerticallyCenteredModal