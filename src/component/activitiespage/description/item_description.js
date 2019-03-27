import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Col,Row, Container ,Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CollapsePage from './collapse';
import axios from 'axios';


class Item_descript extends Component {
    constructor(props) {
        super(props);
        this.state = { numb:1 }
    }
    componentDidMount(){
      axios.get('/activitieslist')
        .then(res=>{this.setState({...res.data.filter(el=>el._id === this.props.match.params._id)[0]})})  
    }
    reserve_act=()=>{
      axios.post('/reservedactivity',{...this.state})
    }
    render() {
        console.log(this.props.tab+'tabb')
        return ( <div>
            <Container>
                <Row>
                    <Col>
                        <br/>
                        <br/>
                       <div > <img className="img_descrip" src={this.state.image} width='545px' height= '389px '/></div>
                   </Col>
                    <Col style={{textAlign:" start"}} >
                        <br/>
                        <br/>
                        {/* <div style={{textAlign:" start", backgroundColor:'white'}} > */}
                    <Row>
                    <Col> <h3>{this.state.title}</h3></Col>
                    <Col>  <h2> <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={this.state.rate}
                        /> </h2> </Col>
                    </Row>
                      <label style={{fontSize:"20px"   }} > <i class="material-icons" style={{fontSize:"70%", color:'rgba(0, 0, 30, 0.3)'}} >place</i> {this.state.position}</label>
                      <h6>{this.state.type}</h6>
                      <h5>price:{this.state.price}</h5>
                        <h5>Notre partener vous propse un {this.state.type}</h5>
                        <h5>description : {this.state.descriptif}</h5>
                        <Button>Maps</Button>
                        <Button>Website</Button>
                        <Button>FB</Button> <br/>
                       
                   </Col>
        </Row>
        <br/>
        <div className="booking_block" style={{backgroundColor:'rgba(219, 239, 244, 0.8)',position:'relative', height: '76px' , width: '1141px',    display: 'flex',justifyContent:' space-around'}}>
         
          <div>
            <label>Check In</label> <br/>
            <input value={this.state.datein}style={{width: "100%" , padding: "2%"}} ></input>
            <i class="fa fa-calendar-o calendar1 " style={{fontSize:"24px"}}></i>
          </div>
          
          <div>
            <label>Check Out</label> <br/>
            <input value={this.state.dateout}style={{width: "100%" , padding: "2%"}} ></input>
            <i class="fa fa-calendar-o calendar2" style={{fontSize:"24px"}}></i>
          </div>
          
         
          <div>
            <label>Persons</label> <br/>
            <input value={this.state.numb}style={{width: "48%" , padding: "2%"}} ></input> <i class="fa fa-caret-up" onClick={()=>this.setState(prevState =>({numb : prevState.numb +1}))} style={{fontSize:"24px"}}></i> <i class="fa fa-caret-down" onClick={()=>{ this.state.numb == 0 ? this.setState({numb:0}) :this.setState(prevState =>({numb : prevState.numb -1}))}} style={{fontSize:"24px"}}></i>
          </div>
          
          <div>
              <br/>
            <Link to={(this.props.location.pathname.indexOf("/user") !== -1)? "/user/reservation":"/login" }><Button onClick={this.reserve_act}>prices and booking</Button></Link>
          </div>
          

        
        </div>
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


const mapStateToProps = state =>{
  return {
          tab : state.reducer_filtr
          }
  } 
 
export default connect(mapStateToProps) (Item_descript);