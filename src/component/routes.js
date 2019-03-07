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
import Feedback from './homepage/feedback'
import MenuExampleHeaderVertical from './Admin/sidenavbar'
import MenuExamplePointing from './Admin/header'
import Liste_description from './activitiespage/description/liste_description'
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( <div className="background-conatiner-global">
            
         <div style={{paddingTop:"5%"}}>
            <Route  path="/" component={NavbarMenu} />
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/activity" component={Homeactivities} />
            <Route exct path="/login" component={Login}/>
            <Route exct path="/signup" component={Signup}/>
            <Route exct path="/feedback" component={Feedback}/>
            <Route exact path='/description/:id' component={Liste_description}/>
            <Route  path="/" component={Footer} />
            <Route exct path="/admin1" component=  {MenuExamplePointing}/>
            <Route exct path="/admin1" component={MenuExampleHeaderVertical}/>
            
        
            {/* <Route  path="/" component={Footer} /> */}
            </div>
            
        </div> );
    }
}
 
export default Routes;