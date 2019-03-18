import React, { Component } from 'react';

import axios from 'axios';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item} = this.props
        return ( <div style={{display :'flex' ,width: '61%' , marginLeft: "20%",justifyContent:'space-between'}}>
            <h5 >{item.typeAct} </h5>
            <h5>{item.datein}</h5>
           <Link to={`/admin1/edit/${item._id}`} > <Button>Edit</Button></Link>
            <Button>Delete</Button>
        </div> );
    }
}
 




class Listactivity extends Component {
    constructor(props) {
        super(props);
        this.state = {tab1:[]  }
    }
    
    componentDidMount(){
        axios.get('/activitieslist')
        .then(res=>{this.setState({tab1 : res.data})})
    }
    
    render() { 
        return ( <div>
            <h1>List Of Activities</h1>
            {this.state.tab1.map((elt,index)=> <Item item={elt} key={index} />)}
        </div> );
    }
}
 



 
export default  Listactivity;