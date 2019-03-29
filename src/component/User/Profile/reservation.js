import React, { Component } from 'react';
import {Button,Col,Row} from 'react-bootstrap'
import axios from 'axios'
import Item_reserv from './item_reserv';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = { numb:1 }
    }
    loadFromLocalStorage = () => {
      try {
       const serializedState = localStorage.getItem('id_act')
       if (serializedState === null) return undefined
       return JSON.parse(serializedState)
        } catch(e) {
         console.log(e)
         return undefined
           }
         }
         saveToLocalStorage=(state)=> {
          try {
             const serializedState = JSON.stringify(state)
               localStorage.setItem('reserv', serializedState)
              } catch(e) {
                console.log(e)
                  }
              }
              loadFromLocalStorage2 = () => {
                try {
                 const serializedState = localStorage.getItem('reserv')
                 if (serializedState === null) return undefined
                 return JSON.parse(serializedState)
                  } catch(e) {
                   console.log(e)
                   return undefined
                     }
                   }
         componentDidMount=()=>{
          // axios.get(`/activ/${this.loadFromLocalStorage()}`)
          
          // .then((res)=>this.setState({...res.data}))
          // .catch((err)=>alert(err))
          // console.log(this.loadFromLocalStorage()+'idddact')

          axios.get('/reservedactivitylist')
          .then((res)=>this.saveToLocalStorage(res.data))
        }
        componentDidUpdate=()=>{
         
          axios.get('/reservedactivitylist')
          .then((res)=>this.saveToLocalStorage(res.data))
        }
    render() { 
        return ( <div style={{backgroundColor:'#f0f3f4',height:'100vh'}}>
        <Row>
        <Col  xs={12} md={4}>
        <div style={{ alignItems: 'center',display: 'flex',flexDirection: 'column', padding:'10%',width:' 81%',marginLeft:' 7%',backgroundColor:'white'}}>
     
     <div   style={{width: '134px', height: '134px', lineHeight: '134px'}}>
                                    <div >
        
          <img  width="100%"  alt="..." src="https://fabskill.com/assets/img/user-profile/grb-1552495533.jpg" style={{borderRadius: '66px'}}/>

       </div>
    </div>
    <br/><h4>user user</h4>
     </div><br/>

     <div style={{ alignItems: 'start',display: 'flex',flexDirection: 'column', padding:'2%',width:' 81%',marginLeft:' 7%',backgroundColor:'white',height:'68%'}}>
     
     <div   style={{width: '316px', height: '134px'}}>
          <h5 style={{textAlign:'start'}}>infos</h5> <hr/>
          <Row >
      <Col md={3} >    <i class="far fa-user"></i> </Col>
      <Col md={9} style={{textAlign:'start'}}> user user</Col>
    </Row>
    <Row >
      <Col md={3} >    <i class="far fa-envelope-open"></i>   </Col>
      <Col md={9} style={{textAlign:'start'}}> user@user</Col>
    </Row>
    <Row >
      <Col md={3} >   <i class="fas fa-gift"></i> </Col>
      <Col md={9} style={{textAlign:'start'}}> 11/11/1111</Col>
    </Row>
    <Row >
      <Col md={3} >    <i class="far fa-heart"></i> </Col>
      <Col md={9} style={{textAlign:'start'}}> sousse</Col>
    </Row> <br/><hr/>
          <h5 style={{textAlign:'start'}}>contact</h5> <hr/>
    <Row >
      <Col md={3} >    <i class="fas fa-map-marker-alt"> </i> </Col>
      <Col md={9} style={{textAlign:'start'}}> Ksar Hellal</Col>
    </Row>
    <Row >
      <Col md={3} >    <i class="fas fa-phone"></i> </Col>
      <Col md={9} style={{textAlign:'start'}}> 55 555 555</Col>
    </Row>
    
          

       
    

    </div>
    {/* <br/><h4>Nesrine Limayem</h4> */}
     </div>
     
    </Col>
        <Col xs={12} md={8}>
        <br/>
        <h2>Reservation</h2>
        {this.loadFromLocalStorage2().map((el,index)=><div> <Item_reserv item_desc={el} key={index}/> <br/></div>)}
        </Col>
        </Row>
        </div> );
    }
}
 
export default Reservation;