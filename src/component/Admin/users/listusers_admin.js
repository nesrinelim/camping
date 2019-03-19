import React, { Component } from 'react';
import Itemuser_admin from './itemuser_admin'
import axios from 'axios'
class Listusers_admin extends Component {
    constructor(props) {
        super(props);
        this.state = {tab1:[]  }
    }

    componentDidMount(){
        axios.get('/admin1/userlist')
        .then(res=>{this.setState({tab1 : res.data})})
      
    }
    render() { 
        return ( <div>
            <h1>List Of Userss</h1>
          
           {this.state.tab1.map((elt,index)=> <Itemuser_admin item={elt} key={index} />)}

        </div>  );
    }
}
 
export default Listusers_admin;