import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom'
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



import Add_act_admin from './Admin/activities/add_activ_admin';

import Adminhome from './Admin/adminhome';
import Editprofile from './Admin/profile/editprofile';
import Listactivity from './Admin/activities/listactivity_admin';
import Editact from './Admin/activities/editactiv_admin';
import item_description from './activitiespage/description/item_description';
import Visualize_profile from './Admin/profile/visualizeprofile';


class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        console.log(this.props.location.pathname+'pathname')
        return ( <Switch>
       
        {this.props.location.pathname.indexOf("/admin") == -1 ? 
        <div className="background-conatiner-global" style={{paddingTop:"5%"}}>
        <Route  path="/" component={NavbarMenu} />
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/activity" component={Homeactivities} />
            <Route exct path="/login" component={Login}/>
            <Route exct path="/signup" component={Signup}/>
            <Route exct path="/feedback" component={Feedback}/>
            <Route exact path='/description/:_id' component={item_description}/>
            <Route  path="/" component={Footer} />
             </div> : 
             <div >
             <Route exct path="/admin1" component={Adminhome}/>
           
           
            <Route exact path="/admin1/add_act" component={Add_act_admin} />
            <Route exact path="/admin1/editprofile" component={Editprofile} />
            <Route exact path="/admin1/list_act" component={Listactivity} />
            <Route exact path='/admin1/edit/:_id' component={Editact} />
            <Route exact path='/admin1/visualize_profile' component={Visualize_profile} />
                  </div>
                }
         
            
        
        </Switch> );
    }
}
 
export default withRouter(Routes);