import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    deleteActivity=()=>
    {  const {item} = this.props
    axios.delete(`/deleteactivity/${item._id}`)   
  .catch((err)=>alert(err)) 
    }
    render() { 
        const {item} = this.props

        return ( <div style={{display :'flex' ,width: '61%' , marginLeft: "20%",justifyContent:'space-between'}}>
        <div style={{display :'flex',justifyContent:'space-between' ,width:'50%'}}>
           <h5>{item.eventorganizer}</h5>
            <h5 >{item.typeAct} </h5>
            <h5>{item.datein}</h5>
            <h5>{item.dateout}</h5>
          
            </div>
            <div>
           <Link to={`/admin1/edit/${item._id}`} > <i style={{color:"grey"}}class="material-icons">edit</i></Link>
           <i  style={{color:"red"}} class="material-icons" onClick={this.deleteActivity}>delete</i>
           <i class="material-icons">sync_disabled</i>
           </div>
        </div> );
    }
}




export default (Item);