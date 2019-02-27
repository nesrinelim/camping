import React, { Component } from 'react';


class Itemactivity extends Component {
    
    render() { 
        return (<div>
     
           <img src={this.props.item.image}/>
           <h3>{this.props.item.type} </h3>
           <h1>{this.props.item.title}</h1>
           <h3>{this.props.item.descriptif}</h3>
           <span>{this.props.item.prix}</span>
           <button>{this.props.item.button}</button>


        </div>  );
    }
}
 
export default Itemactivity;