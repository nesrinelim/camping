import React, { Component } from 'react';
class Itemuser_admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
            <i style={{color:"red"}} class="material-icons">delete</i>
            <i style={{color:"cyan"}}class="material-icons">sync_disabled</i>
           </div>
            </div> );
    }
}
 
export default Itemuser_admin;