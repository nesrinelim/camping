import React, { Component } from 'react';
import { Button,Modal,ButtonToolbar } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import MyVerticallyCenteredModal from './feedback'
class  Comment extends Component {
    state = { isopen: false ,
         modalShow: false 
    }
    render() { 
       
        let modalClose = () => this.setState({ modalShow: false });
        return (<div>
            <div class=" btn-highlight" data-ref="contact-us-button" aria-label="Contact Us" data-reactid="676" onClick={()=>this.setState(prevState => ({isopen: !prevState.isopen }))  } >
                <i class="fa fa-comment a-icon a-icon-size-1x a-icon-pad" aria-hidden="true" data-reactid="677" ></i>
            </div> 
            {this.state.isopen ? <div>  
                
               <Link to='/contact'><button type="button" data-ref="SMS-button" class="btn_comment btn_1" data-reactid="794"><i class="fa fa-comments a-icon a-icon-size-1x a-icon-pad" aria-hidden="true" data-reactid="795"></i>Sms</button> </Link> 
            <br/>        
           
            <ButtonToolbar>
          <button  className="btn_comment btn_2" 
          
            
            onClick={() => this.setState({ modalShow: true })}
          >
            Feedback
          </button>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
            
        {/* <Link to='/feedback'>
            <button type="button" data-ref="Feedback-button" class="btn_comment btn_2" data-reactid="789"><i class="fa fa-envelope-o a-icon a-icon-size-1x a-icon-pad" aria-hidden="true" data-reactid="790"></i>Feedback</button> </Link>  */}
            </div>: <div></div>
            }
          
       
        </div>
        
          );
    }
}
 
export default Comment;