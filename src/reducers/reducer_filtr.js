let tab=[

    // {id:"1",datein:"15/03/2019",dateout:"16/03/2019",price:'50',image:"https://www.omnihotels.com/-/media/images/hotels/homrst/activities/homrst-omni-homestead-resort-horseback-riding-1170x660-no-alt-tag.jpg?h=660&la=en&w=1170",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:3.5,position:"monastir"},
    // {id:"3",datein:"15/03/2019",dateout:"16/03/2019",price:'50',image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/benchalbiasofien@hotmail.com/deals/35ee93e5-976f-2196-dd6b-928d75cd8a07.png",type:"loisir",title:"QUAD EN FORÊT",descriptif:"SC GUEST QUAD ",prix:"50dt",button:"More details",rate:4,position:"tunis"},
    // {id:"4",datein:"15/03/2019",dateout:"16/03/2019",price:'32',image:"https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?dl&fit=crop&crop=entropy&w=640&h=426",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:5,position:"monastir"},
    // {id:"5",datein:"15/03/2019",dateout:"16/03/2019",price:'20',image:"https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?dl&fit=crop&crop=entropy&w=640&h=480",type:"loisir",title:"ANIMATION",descriptif:"t’s that time of year when many of us in the northern hemisphere begin to pack away our camping gear and trade our outdoorsy adventures for slightly more cozy indoor endeavors. But there’s no need to lose out on a whole camping season. These year-round warm weather camping destinations will ",prix:"50dt",button:"More details",rate:3,position:"monastir"},
    // {id:"2",datein:"15/03/2019",dateout:"16/03/2019",price:'360',image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/benchalbiasofien@hotmail.com/deals/9b0f178c-f3b6-a162-cee7-c30b1f573909.png",type:"loisir",title:"EXCURSION À CHEVAL",descriptif:"SC GUEST QUAD",prix:"50dt",button:"More details",rate:3,position:"monastir"},    
    // {id:"6",datein:"15/03/2019",dateout:"16/03/2019",price:'80',image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/toutou.leclown@gmail.com/deals/6e76a652-2724-b9f9-dfad-4a0f1d934064.png",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:2,position:"monastir"},
    
    ]

const reducer_filtr = (state=tab,action) => 
{
    switch(action.type){
        case 'FILTER_REG' :
            if( (action.typeact=='') ||(action.typeact=='all') )  return tab.filter(elt =>elt.position === (action.pos)) ;
            else if((action.typeact !=='') ||(action.typeact=='all') ) return tab.filter(elt =>((elt.typeAct == action.typeact) && (elt.position == action.pos)));
            else if (action.pos =='allr' && action.typeact !=='')return tab.filter(elt =>elt.typeAct == action.typeact)
           
            // case 'FILTER_REG' :return tab.filter(elt =>elt.position === (action.pos)) 
        case 'FILTER_ACT' :if (action.pos==''||action.pos=='allr') return tab.filter(elt =>elt.typeAct == action.typeact) ;
           
        return tab.filter(elt =>((elt.typeAct == action.typeact) && (elt.position == action.pos)))
        // case 'FILTER_ACT' :return tab.filter(elt =>elt.typeAct == action.typeact)
        case 'ALL_ACT' :if (action.pos !=='' && action.pos !== 'allr')return tab.filter(elt =>elt.position === (action.pos)); 
        else if (action.typeact=='all' ||action.pos == 'allr') return tab ;
        else if(action.pos=='')return tab
        case'ALL_REG' : if(action.typeact !=='' && action.typeact !=='all') return  tab.filter(elt =>elt.typeAct == action.typeact) ; else if(action.typeact =='all') return tab

        case 'UPDATE' : return (state = action.newtab, tab=action.newtab)
        default :return  state;
       
    }
    
}
export default reducer_filtr