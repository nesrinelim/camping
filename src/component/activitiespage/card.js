import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

class CardExample  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {item}=this.props
    return ( <Link to={`/description/${item._id}`}> 
    <div className="itemactivity-container">
     
     <div class="item"> <img className="image-activity"src={item.image}/></div> 
     
     <div style={{lineHeight: "normal"}}>
     <div style={{display: "flex" ,justifyContent: "space-between"}}>
     <span style={{Color: "rgb(97, 97, 97)",fontSize: "12px",textTransform: "capitalize"}}><i class="material-icons">restaurant</i>{item.typeAct}</span>
     <span style={{Color: "rgb(97, 97, 97)",fontSize: "12px",textTransform: "capitalize"}}><i class="material-icons">place</i> {item.position}</span>
     </div>
     
     <div className="tt">
     <StarRatingComponent 
             name="rate1" 
             starCount={5}
             value={item.rate}
           />  
        <h1 style={{fontWeight: "bold",color: "rgb(0, 0, 0)",fontSize: "16px", whiteSpace: "nowrap",overflow: "hidden",fontFamily: "Poppins"}}>{item.title}</h1>
       <h2 style={{color: "rgb(97, 97, 97)", fontSize: "12px",fontFamily: "Poppins"}}><span>{item.descriptAct }</span></h2>
       <h4 style={{color: "rgb(97, 97, 97)", fontSize: "12px",fontFamily: "Poppins"}}>price: {item.priceAct}</h4>
     
       </div>
       </div>
       </div>
    {/* <div style={{ width: "18rem" ,color:'black' }}>
    <div ><img className='img_card' src={item.image} width='350rem' height='200rem' /></div>
    <div style={{textAlign:" start" ,position:"relative" }} >
    <label className='label1_card' style={{fontSize:"12px",position:"absolute",top: "1%" , left:" 3%"}} > <i class="material-icons" style={{fontSize:"8px"}} >place</i> {item.typeAct}</label>
    <label className='label2_card' style={{fontSize:"12px",position:"absolute",top: "1%" ,left:"77%"}} > <i class="material-icons" style={{fontSize:"8px"}} >place</i> {item.position}</label>
    <br/>
    <StarRatingComponent 
           name="rate1" 
           starCount={5}
           value={3}
         />
      <h4>{item.title}</h4>
      <h6>{item.descriptAct}</h6>
      <h6>price:{item.priceAct}</h6>


     

    </div>
  </div>  */}
  </Link>);
  }
}


export default CardExample  ;

// const CardExample = (props) => {
    
//   return (
   
//     <MDBCol>
      
//       <MDBCard className="cart" style={{ width: "18rem"  }}>
//       <div style={{width: "18rem" ,height:"15rem" }}>
//       <div class="hovereffect">
//         <img className="img-fluid " src={props.item.image} alt=""/>
//             <div class="overlay">
//                 <h2>Effect 12</h2>
// 				<p>
// 					<a href="#">LINK HERE</a>
// 				</p>
//             </div>
//     </div>

//     </div>
//     <label style={{fontSize:"12px",position:"absolute",    top: "47%" , right:" 3%"}} > <i class="material-icons" style={{fontSize:"8px"}} >place</i> {props.item.position}</label>

//         {/* <MDBCardImage className="img-fluid "  src={props.item.image} waves /> */}

        
//         <MDBCardBody style={{marginTop:"-15%"}}>
       
//           <MDBCardTitle>{props.item.title}</MDBCardTitle>
//           <MDBCardText>
//           {props.item.descriptif}
//           </MDBCardText>
//           <StarRatingComponent 
//           name="rate1" 
//           starCount={5}
//           value={props.item.rate}
//         /> <br/>
//          <Link to={`/description/${props.item.id}`}> <MDBBtn href="#">{props.item.button}</MDBBtn></Link>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
   
//   )
// }

// export default CardExample;