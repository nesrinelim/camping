import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'

import Routes from './component/routes'
import NavbarMenu from './component/homepage/navbar_menu'
import './App.css';


class App extends Component {

  //halima 
  //nessrine
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      
      <Routes/>
    
     
                
      </BrowserRouter>
         
      </div>
    );
  }
}

export default App;
