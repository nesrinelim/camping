import React, { Component } from 'react';
import Item from './itemactivity_admin'
import axios from 'axios';

class Listactivity extends Component {
    constructor(props) {
        super(props);
        this.state = {tab1:[]  }
    }
    
    componentDidMount(){
        axios.get('/activitieslist')
        .then(res=>{this.setState({tab1 : res.data})})
      
    }
    componentDidUpdate(){

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
 


 
export default  (Listactivity);