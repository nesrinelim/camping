import React, { Component } from 'react';
import axios from 'axios'

class Itemuser_admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    disable=()=>{
        const {item}=this.props
        axios.put(`/editactivity/${item._id}`,{ visiblity:false})
    }
    delete=()=>{
        const {item}=this.props
        axios.delete(`/deleteuser/${item._id}`)
    }
    render() { 
        const {item} = this.props
       
        return (<div style={{display :'flex' ,width: '61%' , marginLeft: "20%",justifyContent:'space-between'}}>
        <div style={{display :'flex',justifyContent:'space-between' ,width:'50%'}}>
            <h5>{item.fname}</h5>
            <h5 >{item.lname} </h5>
            <h5>{item.email}</h5>
            <h5>{item.password}</h5>
            </div>
            <div>
            <i style={{color:"grey"}}class="material-icons">edit</i>
            <i style={{color:"red"}} class="material-icons"onClick={this.delete}>delete</i>
            <i style={{color:"cyan"}}class="material-icons">sync_disabled</i>
           </div>
            </div> );
    }
}
 
export default Itemuser_admin;