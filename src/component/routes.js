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


import Profileuser from './User/Profile/Profileuser'
import Listusers_admin from './Admin/users/listusers_admin'
import Navbar_user from './User/homepage_user/navbar_user';
import Reservation from './User/Profile/reservation';
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    id_user=(_id)=>{
        this.setState({id:_id})
    }
    render() { 
        console.log(this.props.location.pathname+'pathname')
        console.log(this.state.id)
        return ( <Switch>
       
        {(this.props.location.pathname.indexOf("/admin") == -1)&&(this.props.location.pathname.indexOf("/user") == -1) ? 
        <div className="background-conatiner-global" style={{paddingTop:"5%"}}>
        <Route  path="/" component={NavbarMenu} />
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/activity" component={Homeactivities} />
            <Route exct path="/login" component={Login}/>
            <Route exct path="/signup" render={(props)=><Signup id_user={this.id_user} />}/>
            <Route exct path="/feedback" component={Feedback}/>
            <Route exact path='/description/:_id' component={item_description}/>
         <Route  path="/" component={Footer} />
             </div> : 
             <div >
             <Route  path="/admin1" component={Adminhome}/>
            <Route exact path="/admin1/add_act" component={Add_act_admin} />
            <Route exact path="/admin1/visualize_profile" component={Visualize_profile} />
            
            <Route exact path="/admin1/editprofile" component={Editprofile} />
            <Route exact path="/admin1/list_act" component={Listactivity} />
            <Route exact path='/admin1/edit/:_id' component={Editact} />
            <Route exact path='/userprofile' component={Profileuser} />
            <Route exact path='/admin1/userlist' component={Listusers_admin} />
            <div style={{paddingTop:"5%" }}>
            <Route path='/user' component={Navbar_user} />
            <Route exact path='/user' component={Home} />
            <Route exact path="/user/activity" component={Homeactivities} />
            <Route exact path='/user/description/:_id' component={item_description}/>
            <Route exact path="/user/aboutus" component={Aboutus} />
            <Route exact path="/user/contact" component={ContactPage} />
            <Route exact path='/user/profile' render={(props)=><Profileuser id={this.state.id}/>} />
            <Route exact path="/user/reservation" component={Reservation} />
 
            <Route  path="/user" component={Footer} />
            </div>
                  </div>
                }
         
            
        
        </Switch> );
    }
}
 
export default withRouter(Routes);