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
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.747027638517!2d10.605208225575494!3d35.85520610716694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b92d29b7747%3A0xa2098951f47d6e46!2sgo+my+code+sousse!5e0!3m2!1sfr!2stn!4v1546795819055" width="450" height="450" frameborder="0"  allowfullscreen></iframe>
        {/* <SimpleMap/> */}
        </Col>
</Row>

</Container>


<br/>


        </div> );
    }
}
 
export default Contact;