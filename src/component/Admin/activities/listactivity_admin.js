import React, { Component } from 'react';
import Item from './itemactivity_admin'
import axios from 'axios';
<<<<<<< HEAD

import Item from './itemactivity_admin'



=======
>>>>>>> origin/halima

class Listactivity extends Component {
    constructor(props) {
        super(props);
        this.state = {tab1:[]  }
    }
    
    componentDidMount(){
        axios.get('/activitieslist')
        .then(res=>{this.setState({tab1 : res.data})})
<<<<<<< HEAD
        console.log('component did mount')
    }
    componentDidUpdate(){
        axios.get('/activitieslist')
        .then(res=>{this.setState({tab1 : res.data})})
        console.log('component updated')
=======
      
    }
    componentDidUpdate(){

        axios.get('/activitieslist')
        .then(res=>{this.setState({tab1 : res.data})})
        
>>>>>>> origin/halima
    }
    render() { 
   
        return ( <div>
            <h1>List Of Activities</h1>
          
           {this.state.tab1.map((elt,index)=> <Item item={elt} key={index} />)}

        </div> );
    }
}
 


 
<<<<<<< HEAD
export default Listactivity;
=======
export default  (Listactivity);
>>>>>>> origin/halima
