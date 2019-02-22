import React, {Component} from 'react'
import {Carousel} from 'react-bootstrap'


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Carousel>
              <Carousel.Item>
                  <img
                    className="d-block w-90"
                    src="https://static.wixstatic.com/media/ff6bf6_1731e5bdff96457ba7919728ccfdbaa2.jpg/v1/fill/w_960,h_499,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_1731e5bdff96457ba7919728ccfdbaa2.webp"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?cs=srgb&dl=activity-adventure-camp-1309584.jpg&fm=jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/266436/pexels-photo-266436.jpeg?dl&fit=crop&crop=entropy&w=640&h=960"
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>;
        </div> );
    }
}
 
export default Slider;