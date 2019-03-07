import React, { Component } from 'react';


import CardExample from './card'


let tab=[

{id:"1",price:'50',image:"https://www.omnihotels.com/-/media/images/hotels/homrst/activities/homrst-omni-homestead-resort-horseback-riding-1170x660-no-alt-tag.jpg?h=660&la=en&w=1170",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:3,position:"monastir"},
{id:"3",price:'50',image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/benchalbiasofien@hotmail.com/deals/35ee93e5-976f-2196-dd6b-928d75cd8a07.png",type:"loisir",title:"QUAD EN FORÊT",descriptif:"SC GUEST QUAD ",prix:"50dt",button:"More details",rate:4,position:"tunis"},
{id:"4",price:'32',image:"https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?dl&fit=crop&crop=entropy&w=640&h=426",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:5,position:"monastir"},
{id:"5",price:'20',image:"https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?dl&fit=crop&crop=entropy&w=640&h=480",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:3,position:"monastir"},
{id:"2",price:'360',image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/benchalbiasofien@hotmail.com/deals/9b0f178c-f3b6-a162-cee7-c30b1f573909.png",type:"loisir",title:"EXCURSION À CHEVAL",descriptif:"SC GUEST QUAD",prix:"50dt",button:"More details",rate:3,position:"monastir"},    
{id:"6",price:'80',image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/toutou.leclown@gmail.com/deals/6e76a652-2724-b9f9-dfad-4a0f1d934064.png",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:2,position:"monastir"},

]
class Listactivity extends Component {
    state = {  num:0}

    
    render() { 
        return ( <div >
            
            
            <div className="row container ">
                    {tab.map((el,index)=><div className="col lg-4 md-6 sm-12"><CardExample item ={el} key={index}/></div>)}
            
            </div>

        </div>);
    }
}
 
export default Listactivity;