import React, { Component } from 'react';
import {  Form, Button,Modal } from 'react-bootstrap';
class MyVerticallyCenteredModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    handlechang2=(e)=>{
      
      let files=e.target.files
      // to read the file
      let reader= new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload=(e)=>{
          console.log('imageee',e.target.result)
          this.setState({img_user:e.target.result})
      }}
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
           
            <Form.Control  onChange={this.handlechang2}  name="img_user"  type="file" accept="image/*"   />
  
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Edit image</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  export default MyVerticallyCenteredModal