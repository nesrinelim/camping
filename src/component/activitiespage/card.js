import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import StarRatingComponent from 'react-star-rating-component';

const CardExample = (props) => {
    
  return (
   
    <MDBCol>
      
      <MDBCard className="cart" style={{ width: "18rem"  }}>
      <div style={{width: "18rem" ,height:"15rem" }}>
      <div class="hovereffect">
        <img className="img-fluid " src={props.item.image} alt=""/>
            <div class="overlay">
                <h2>Effect 12</h2>
				<p>
					<a href="#">LINK HERE</a>
				</p>
            </div>
    </div>
    </div>
        {/* <MDBCardImage className="img-fluid "  src={props.item.image} waves /> */}

        
        <MDBCardBody>
       
          <p style={{fontSize:"12px",position:"absolute",    top: "44%" , right:" 3%"}} > <i class="material-icons" style={{fontSize:"8px"}} >place</i> {props.item.position}</p>
          <MDBCardTitle>{props.item.title}</MDBCardTitle>
          <MDBCardText>
          {props.item.descriptif}
          </MDBCardText>
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={props.item.rate}
        /> <br/>
          <MDBBtn href="#">{props.item.button}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;