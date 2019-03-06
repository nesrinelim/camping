import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import NavbarMenu from './homepage/navbar_menu'
import Footer from './homepage/footer'

import Home from './homepage/home'
import Aboutus from './aboutuspage/aboutus';
import Contact from './contactpage/contact'
import ContactPage from './contactpage/contactnew'
import Homeactivities from './activitiespage/activitieshome'
import Login  from './loginpage/login'
import Signup from './loginpage/signup'
import MenuExampleHeaderVertical from './Admin/sidenavbar'
import MenuExamplePointing from './Admin/header'
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="background-conatiner-global">
            
         <div style={{paddingTop:"5%"}}>
            {/* <Route  path="/" component={NavbarMenu} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/activity" component={Homeactivities} />
            <Route exct path="/login" component={Login}/>
            <Route exct path="/signup" component={Signup}/>
            <Route exct path="/admin1" component=  {MenuExamplePointing}/>
            <Route exct path="/admin1" component={MenuExampleHeaderVertical}/>
        
            {/* <Route  path="/" component={Footer} /> */}
            </div>
            
        </div> );
    }
}
 
export default Routes;