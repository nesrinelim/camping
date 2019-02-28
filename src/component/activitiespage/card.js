import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = (props) => {
    
  return (
    <MDBCol>
      <MDBCard className="cart" style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid"  src={props.item.image} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.item.title}</MDBCardTitle>
          <MDBCardText>
          {props.item.descriptif}
          </MDBCardText>
          <MDBBtn href="#">{props.item.button}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;