import React, { Component } from 'react';
import {Route} from 'react-router-dom'


import Home from './homepage/home'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Route exact path="/" component={Home} />
        </div> );
    }
}
 
export default Routes;