import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Col,Row, Container ,Button} from 'react-bootstrap';
import CollapsePage from './collapse';
class Item_descript extends Component {
    constructor(props) {
        super(props);
        this.state = { numb:1 }
    }
    render() {
        const {item_desc} =this.props 
        return ( <div>
            <Container>
                <Row>
                    <Col>
                        <br/>
                        <br/>
                       <div > <img src={item_desc.image} width='545px' height= '389px '/></div>
                   </Col>
                    <Col style={{textAlign:" start"}} >
                        <br/>
                        <br/>
                        {/* <div style={{textAlign:" start", backgroundColor:'white'}} > */}
                    <Row>
                    <Col> <h3>{item_desc.title}</h3></Col>
                    <Col>  <h2> <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={item_desc.rate}
                        /> </h2> </Col>
                    </Row>
                      <label style={{fontSize:"20px"   }} > <i class="material-icons" style={{fontSize:"70%", color:'rgba(0, 0, 30, 0.3)'}} >place</i> {item_desc.position}</label>
                      <h6>{item_desc.type}</h6>
                      <h5>price:{item_desc.price}</h5>
                        <h5>Notre partener vous propse un {item_desc.type}</h5>
                        <h5>description : {item_desc.descriptif}</h5>
                        <Button>Maps</Button>
                        <Button>Website</Button>
                        <Button>FB</Button> <br/>
                        {/* </div> */}
                   </Col>
        </Row>
        <br/>
        <Row style={{backgroundColor:'rgba(219, 239, 244, 0.8)', height: '76px' , width: '1141px'}}>
          <Col>
          <div>
            <label>Check In</label> <br/>
            <input value={item_desc.datein}style={{width: "72%" , padding: "2%"}} ></input>
            <i class="fa fa-calendar-o" style={{fontSize:"24px"}}></i>
          </div>
          </Col>
          <Col>
          <div>
            <label>Check Out</label> <br/>
            <input value={item_desc.dateout}style={{width: "72%" , padding: "2%"}} ></input>
            <i class="fa fa-calendar-o" style={{fontSize:"24px"}}></i>
          </div>
          </Col>
          <Col>
          <div>
            <label>Persons</label> <br/>
            <input value={this.state.numb}style={{width: "32%" , padding: "2%"}} ></input> <i class="fa fa-caret-up" onClick={()=>this.setState(prevState =>({numb : prevState.numb +1}))} style={{fontSize:"24px"}}></i> <i class="fa fa-caret-down" onClick={()=>{ this.state.numb == 0 ? this.setState({numb:0}) :this.setState(prevState =>({numb : prevState.numb -1}))}} style={{fontSize:"24px"}}></i>
          </div>
          </Col>
          <Col>
          <div>
              <br/>
            <Button>prices and booking</Button>
          </div>
          </Col>

        
        </Row>
        <br/>
        
        <Row>
            <h1>Details :</h1><br/>
            
            {/* for hiking */}
            {/* <h4>Where: {Yosemite Valley, California} </h4>
            <h4>Distance: {1 mile round trip}</h4>
           <h4>Best for: {Hikers looking for an easier alternative to Half Dome.}</h4>  */}
             {/* for hiking */}
             
        </Row>
       <CollapsePage/>
        <br/>
        </Container>
        </div> );
    }
}
 
export default Item_descript;