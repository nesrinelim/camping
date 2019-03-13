import React, { Component } from 'react';
import {MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem} from 'mdbreact'
// import { url } from 'inspector';
class RegionFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }
    render() { 
        return ( <div className="header_filtr" style={{height:"60vh", backgroundImage:'url(https://images.pexels.com/photos/239520/pexels-photo-239520.jpeg?dl&fit=crop&crop=entropy&w=1500&h=851)', alignItems: "center", display: "flex", flexDirection: "column",justifyContent:"center"}}>
       
      <select aria-label="Régions" class="form-control" style={{height:"40px",borderRadius:"0",width:"300px",fontFamily:"Poppins",color:"#000000"}}>
            <option disabled="" value="1" style={{color:"#555555"}}>Sélectionnez votre région...</option>
            <option value="">Toutes les régions</option>
            <option value="Grand Tunis">Grand Tunis</option>
            <option value="Bizerte">Bizerte</option>
            <option value="Cap Bon">Cap Bon</option>
            <option value="Mahdia">Mahdia</option>
            <option value="Monastir">Monastir</option>
            <option value="Région Centre">Région Centre</option>
            <option value="Région Ouest">Région Ouest</option>
            <option value="Région Sud">Région Sud</option>
            <option value="Sfax">Sfax</option>
            <option value="Sousse">Sousse</option>
      </select>
        </div> );
    }
}
 
export default RegionFilter;