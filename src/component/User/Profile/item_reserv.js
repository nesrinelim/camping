import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import Axios from 'axios'
import {Link} from 'react-router-dom'
class Item_reserv extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
  delete=()=>{
    const {item_desc}=this.props
    Axios.delete(`/deleteresev/${item_desc._id}`)
    .then(res=>console.log(res.data+'resdata'))
    .catch((err)=>alert(err))
}
    render() { 
        const {item_desc}=this.props
        // console.log('hhhh'+item_desc._id+'hhhh')
        return ( <div style={{backgroundColor:'white',width:'60vw'}}>
        <h4>{item_desc.typeAct}</h4>
        <h6>{item_desc.descriptAct}</h6>
        <div className="booking_block" style={{position:'relative', height: '76px' , width: '837px',    display: 'flex',justifyContent:' space-around'}}>
          
          <div>
            <label>Check In</label> <br/>
            <input value={item_desc.datein}style={{width: "100%" , padding: "2%"}} ></input>
            <i class="fa fa-calendar-o calendar1 " style={{fontSize:"24px",left:' 158px'}}></i>
          </div>
          
          
          <div>
            <label>Check Out</label> <br/>
            <input value={item_desc.dateout}style={{width: "100%",padding: "2%"}} ></input>
            <i class="fa fa-calendar-o calendar2" style={{fontSize:"24px",left:'367px'}}></i>
          </div>
          
          
          <div>
            <label>Persons</label> <br/>
            <input value={item_desc.numb}style={{width: "48%" , padding: "2%"}} ></input> <i class="fa fa-caret-up" onClick={()=>this.setState(prevState =>({numb : prevState.numb +1}))} style={{fontSize:"24px",left: '542px'}}></i> <i class="fa fa-caret-down" onClick={()=>{ item_desc.numb == 0 ? this.setState({numb:0}) :this.setState(prevState =>({numb : prevState.numb -1}))}} style={{fontSize:"24px",left: '542px'}}></i>
          </div>
         
          <div>
              <br/>
            <Button><i style={{fontSize:'15px',    height: '48%!important'}}class="material-icons">edit</i> </Button>
            <Button onClick={this.delete}><i style={{fontSize:'15px',    height: '48%!important'}}class="material-icons" >delete</i> </Button>
            </div>
          

        
        </div>
        
        </div> );
    }
}
 
export default Item_reserv;