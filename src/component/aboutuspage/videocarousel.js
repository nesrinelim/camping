import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import {Container} from 'react-bootstrap'
import myVideo1 from './video/camp.mp4';
import myVideo2 from './video/forest.mp4';
import myVideo3 from './video/bikers.mp4';
import myVideo4 from './video/fishing.mp4';
const CarouselPage = () => {
  return (
     
    <MDBContainer className=" mt-4 ">
      <MDBRow>
        <MDBCol md="12">
          <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <video className="video-fluid d-block" muted autoPlay loop>
                  <source src={myVideo1} type="video/mp4" />
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src={myVideo2}type="video/mp4" />
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src={myVideo3}type="video/mp4" />
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src={myVideo4}type="video/mp4" />
                </video>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  );
}

export default CarouselPage;