import React, { Component } from 'react';
import {Row,Col, Container} from 'react-bootstrap'
import Itemactivity from './itemactivity'
import CardExample from './card'
let tab=[{image:"https://cdn.niwees.net/fit-in/426x240/filters:format(jpeg):quality(60)/advertisers/toutou.leclown@gmail.com/deals/6e76a652-2724-b9f9-dfad-4a0f1d934064.png",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details"},
{image:"https://cdn.niwees.net/fit-in/426x240/filters:format(jpeg):quality(60)/advertisers/toutou.leclown@gmail.com/deals/6e76a652-2724-b9f9-dfad-4a0f1d934064.png",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details"},
{image:"https://cdn.niwees.net/fit-in/426x240/filters:format(jpeg):quality(60)/advertisers/toutou.leclown@gmail.com/deals/6e76a652-2724-b9f9-dfad-4a0f1d934064.png",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details"},
{image:"https://cdn.niwees.net/fit-in/426x240/filters:format(jpeg):quality(60)/advertisers/benchalbiasofien@hotmail.com/deals/9b0f178c-f3b6-a162-cee7-c30b1f573909.png",type:"loisir",title:"EXCURSION À CHEVAL",descriptif:"SC GUEST QUAD",prix:"50dt",button:"More details"},
{image:"https://cdn.niwees.net/fit-in/426x240/filters:format(jpeg):quality(60)/advertisers/benchalbiasofien@hotmail.com/deals/f8735b4a-a7a2-30bc-bdbf-c1ba994d774e.png",type:"loisir",title:"animation",descriptif:"Le clown toutou",prix:"50dt",button:"More details"},
{image:"https://cdn.niwees.net/fit-in/426x240/filters:format(jpeg):quality(60)/advertisers/benchalbiasofien@hotmail.com/deals/35ee93e5-976f-2196-dd6b-928d75cd8a07.png",type:"loisir",title:"QUAD EN FORÊT",descriptif:"SC GUEST QUAD ",prix:"50dt",button:"More details"}]
class Listactivity extends Component {
    state = {  }
    render() { 
        return ( <div>
            
            <Container>
                
                <Row className="option_filtr">
                    <Col className="option"><h3 style={{ fontFamily: "'La Belle Aurore',cursive"}}>All the Activities</h3></Col>
                    <Col className="option"><h3 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Randonnée</h3></Col>
                    <Col className="option"><h3 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Camping</h3></Col>
                    <Col className="option"><h3 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Balade en mer</h3></Col>
                    <Col className="option"><h3 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Equitation</h3></Col>
                    <Col><h3 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Running</h3></Col>
                </Row>
            </Container>
<div className="row container-fluid ">
{tab.map((el,index)=><div className="col lg-4 md-6 sm-12"><CardExample item ={el} key={index}/></div>)}
</div>
        </div>);
    }
}
 
export default Listactivity;