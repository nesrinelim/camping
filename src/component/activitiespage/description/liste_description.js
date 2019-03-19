// import React, { Component } from 'react';
// import Item_descript from './item_description';
// import {connect} from 'react-redux'

// class Liste_description extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         console.log()
//         return ( <div>

//                 {(this.props.tab.filter(elt=> elt._id == this.props.match.params._id)).map((elt,index)=> <Item_descript item_desc={elt} key={index} /> )}
                
//                 </div> );
//     }
// }
// const mapStateToProps=(state)=>{
//     return (
//         {tab: state.reducer_filtr}
//     )
// }
 
// export default connect (mapStateToProps) (Liste_description);