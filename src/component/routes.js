import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import NavbarMenu from './homepage/navbar_menu'
import Footer from './homepage/footer'

import Home from './homepage/home'
import Aboutus from './aboutuspage/aboutus';
import Contact from './contactpage/contact'
import Login  from './loginpage/login'
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="background-conatiner-global">
             <Route  path="/" component={NavbarMenu} />
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/contact" component={Contact} />
            <Route exct path="/login" component={Login}/>
            <Route  path="/" component={Footer} />
        </div> );
    }
}
 
export default Routes;