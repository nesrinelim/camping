import React, { Component } from 'react';
import {Button,Col,Row} from 'react-bootstrap'
class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div style={{backgroundColor:'#f0f3f4',height:'100vh'}}>
        <Row>
        <Col xs={6} md={3}>
        <br/>
        <div style={{backgroundColor:'white',height:'50vh'}}>
           <h5>reservatt</h5></div>
        </Col>
        <Col xs={12} md={9}>
        <br/>
        <div style={{backgroundColor:'white',width:'70vw'}}>
        <h4>Camping</h4>
        <div className="booking_block" style={{position:'relative', height: '76px' , width: '969px',    display: 'flex',justifyContent:' space-around'}}>
          
          <div>
            <label>Check In</label> <br/>
            <input value={this.state.datein}style={{width: "100%" , padding: "2%"}} ></input>
            <i class="fa fa-calendar-o calendar1 " style={{fontSize:"24px",left:' 176px'}}></i>
          </div>
          
          
          <div>
            <label>Check Out</label> <br/>
            <input value={this.state.dateout}style={{width: "100%",padding: "2%"}} ></input>
            <i class="fa fa-calendar-o calendar2" style={{fontSize:"24px",left:'420px'}}></i>
          </div>
          
          
          <div>
            <label>Persons</label> <br/>
            <input value={this.state.numb}style={{width: "48%" , padding: "2%"}} ></input> <i class="fa fa-caret-up" onClick={()=>this.setState(prevState =>({numb : prevState.numb +1}))} style={{fontSize:"24px",left:' 625px'}}></i> <i class="fa fa-caret-down" onClick={()=>{ this.state.numb == 0 ? this.setState({numb:0}) :this.setState(prevState =>({numb : prevState.numb -1}))}} style={{fontSize:"24px",left:' 625px'}}></i>
          </div>
         
          <div>
              <br/>
            <Button><i style={{fontSize:'15px'}}class="material-icons">edit</i> </Button>
            <Button><i style={{fontSize:'15px'}}class="material-icons">delete</i> </Button>
            </div>
          

        
        </div>
        </div>
        </Col>
        </Row>
        </div> );
    }
}
 
export default Reservation;