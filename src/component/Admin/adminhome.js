import React, { Component } from 'react';
import MenuExamplePointing from './header';
import MenuExampleHeaderVertical from './sidenavbar';


class Adminhome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( <div>
            <MenuExamplePointing/>
            <MenuExampleHeaderVertical/>
          
        </div> );
    }
}
 
export default Adminhome;