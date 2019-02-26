import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import TextareaPage from './input'
import SimpleMap from './googlemap'
class Contact extends Component {
    state = {  }
    render() { 
        return ( <div>
            

<Container>
<br/>
<img src="https://static.wixstatic.com/media/ff6bf6_6cb3f5967ada4c26a9401daa5cd39d2f.png/v1/fill/w_155,h_58,al_c,q_80,usm_0.66_1.00_0.01/ff6bf6_6cb3f5967ada4c26a9401daa5cd39d2f.webp"></img>
<h1 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Contact</h1>
<Row>
    <Col>
    <p style={{width:"50%",marginTop:"3%"}}>For general enquiries and further information, please contact us:<br/> 500 Terry Francois Street San Francisco, CA  94158
   Tel: 123-456-7890 Email: info@mysite.com</p>
    </Col>
    <TextareaPage/>
</Row>
<br/>
<Row>
    <Col>
    <h1>GETTING HERE </h1>
    <p>I'm a paragraph. Click here to add your own text and edit me.It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
    </p>
    </Col>
    <Col>
        <SimpleMap/>
        </Col>
</Row>

</Container>


<br/>


        </div> );
    }
}
 
export default Contact;