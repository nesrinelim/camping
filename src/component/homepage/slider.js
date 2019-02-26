import React, {Component} from 'react'
import {Carousel} from 'react-bootstrap'
// import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Carousel>
              
              <Carousel.Item>
                    <img
                      className="d-block w-100 "
                      src="https://images.pexels.com/photos/1252399/pexels-photo-1252399.jpeg?dl&fit=crop&crop=entropy&w=817&h=425"
                      alt="Third slide"  width="800px" height='400px'
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                  <img
                    className="d-block w-100 justify-content-md-center"
                    src="https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?dl&fit=crop&crop=entropy&w=817&h=425 "
                    // src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"  width="800px" height='400px'
                  />
                
              </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/266778/pexels-photo-266778.jpeg?dl&fit=crop&crop=entropy&w=817&h=425"
                        alt="Third slide" width="800px" height='400px'
                      />
                    </Carousel.Item>
            </Carousel>



        );
    }
}
 
export default Slider;