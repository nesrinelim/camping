import React, { Component } from 'react';
import {  Form, Button,Modal } from 'react-bootstrap';
import Axios from 'axios'
class MyVerticallyCenteredModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    loadFromLocalStorage=()=> {
      try {
       const serializedState = localStorage.getItem('state')
       if (serializedState === null) return undefined
       return JSON.parse(serializedState)
        } catch(e) {
         console.log(e)
         return undefined
           }
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
      edit_img=()=>{
        Axios.put(`/edituser/${this.loadFromLocalStorage()}`,{img_user:this.state.img_user})
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
           
            <Form.Control  onChange={this.handlechang2}  name="img_user"  type="file" accept="image/*"   />
  
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{this.edit_img()}}>Edit image</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  export default MyVerticallyCenteredModal