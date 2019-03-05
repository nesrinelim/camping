import React, { Component } from 'react';
import Rate from '../activitiespage/rate'
import { Button,Modal,ButtonToolbar } from 'react-bootstrap';


class MyVerticallyCenteredModal extends React.Component {
    render() {
      return (
        <Modal style={{ opacity:"0.9"}}
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton style={{ backgroundColor: "rgba(255, 235, 255, 0.8)",opacity:"1.2",color:'black'}}>
            <Modal.Title id="contained-modal-title-vcenter">
            <h2 style={{borderStyle: "hidden hidden hidden solid", borderLeftColor: "#f1a404"}}>How did we do?</h2>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "rgba(255, 235, 255, 0.8)",opacity:"1.2",color:'black'}}>
            
            <h6>How would you rate your experience today? (10 is highest) *</h6>
            <Rate/>
            <h6>What was your purpose for visiting?</h6>
            <select aria-label="Régions" class="form-control" style={{height:"40px",borderRadius:"0",width:"300px",fontFamily:"Poppins",color:"#000000"}}>
            <option disabled="" value="1">Please select</option>
            <option value="">All activities</option>
            <option value="Grand Tunis">Camping</option>
            <option value="Bizerte">Hiking</option>
            <option value="Cap Bon">Running</option>
            <option value="Mahdia">Boat trip</option>
            <option value="Mahdia">horseriding</option>
      </select>
      <h6>Were you able to accomplish what you wanted?</h6>
          <button> <i className='far fa-smile' style={{fontSize:'24px'}}> </i></button><button> <i className='far fa-frown' style={{fontSize:'24px'}}> </i></button>
      <h6>What was your favorite part about your experience today?</h6>
      <input placeholder="Was it all the amazing campgrounds we have"/>
      <h6> What was your least favorite?</h6>
      <input placeholder="We want to make this right"/> 
      <h6> Anything else you would like to share or get off your chest?</h6>
      <input placeholder="Anithing, anything at all"/>
      
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "rgba(255, 235, 255, 0.8)",opacity:"1.2",color:'black'}}>
          <button  style={{color:'#f1a404',backgroundColor:'#212121',padding: "1%",paddingRight: "2%",paddingLeft: "2%"}}>Submit</button>
            {/* <Button onClick={this.props.onHide}>Close</Button> */}
          </Modal.Footer>
        </Modal>
      );
    }
  }
  



  class Feedback extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.state = { modalShow: false };
    }
  
    render() {
      let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <ButtonToolbar>
          <button style={{ backgroundColor: "rgba(144, 127, 143, 1)",opacity:"0.6",borderRadius: "23px" , zIndex:"6" ,right:'1%' }}
          
            
            onClick={() => this.setState({ modalShow: true })}
          >
            Feedback
          </button>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
      );
    }
  }
  
  export default Feedback;