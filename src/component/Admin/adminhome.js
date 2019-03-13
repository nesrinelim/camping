import React, { Component } from 'react';
import MenuExamplePointing from './header';
import MenuExampleHeaderVertical from './sidenavbar';


class Adminhome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {admin_info} =this.props
        return ( <div>
            <MenuExamplePointing admin_info={admin_info} />
            <MenuExampleHeaderVertical/>
          
        </div> );
    }
}
 
export default Adminhome;