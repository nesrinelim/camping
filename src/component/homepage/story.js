import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div style={{backgroundColor:'#f7eae1'}}>
        <br/>
            <h2 style={{ fontFamily: "'La Belle Aurore',cursive"}}>WELCOME TO MOONLIGHT GLAMPING</h2>
            <br/>
            <Container style={{width:'80%', height:'auto'}}>
            <label className="story">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                 Feel free to drag and drop me anywhere you like on your page.
                 I’m a great place for you to tell story and let your users know a little more about you.
                This is a great space to write long text about your company and your services. 
                You can use this space to go into a little more detail about your company. 
                Talk about your team and what services you provide. Tell your visitors the story of how you came up with 
                the idea for your business and what makes you different from your competitors. Make your company stand out
                nd show your visitors who you are</label>
                <img  className='image1' id="i38szavpimgimage" alt="" data-type="image" src="https://static.wixstatic.com/media/ff6bf6_6fcc8089b2894ff0a9008ee22de2e0ba.png/v1/fill/w_91,h_101,al_c,q_80,usm_0.66_1.00_0.01/ff6bf6_6fcc8089b2894ff0a9008ee22de2e0ba.webp"/>
                <img  className='image2'id="i38t6zgnimgimage"  alt="" data-type="image" src="https://static.wixstatic.com/media/ff6bf6_45d076dc4ef347a0985d0fb5dce61a2c.png/v1/fill/w_866,h_17,al_c,q_80,usm_0.66_1.00_0.01/ff6bf6_45d076dc4ef347a0985d0fb5dce61a2c.webp"/>
                
                
                
                 </Container>
        </div> );
    }
}
 
export default Story;