import React, { Component } from 'react';
import {Route} from 'react-router-dom'



import Home from './homepage/home'
import Aboutus from './homepage/aboutus';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={Aboutus} />
          
        </div> );
    }
}
 
export default Routes;