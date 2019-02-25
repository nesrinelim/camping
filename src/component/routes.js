import React, { Component } from 'react';
import {Route} from 'react-router-dom'



import Home from './homepage/home'
import Aboutus from './homepage/aboutus';
import Signin  from './sign in/signin'
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exct path="/signin" component={Signin }/>
          
        </div> );
    }
}
 
export default Routes;