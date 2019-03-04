let tab=[{image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/benchalbiasofien@hotmail.com/deals/f8735b4a-a7a2-30bc-bdbf-c1ba994d774e.png",type:"Randonnée",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:3,position:"Monastir"},
{image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/benchalbiasofien@hotmail.com/deals/9b0f178c-f3b6-a162-cee7-c30b1f573909.png",type:"Equitation",title:"EXCURSION À CHEVAL",descriptif:"SC GUEST QUAD",prix:"50dt",button:"More details",rate:3,position:"Monastir"},    
{image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/benchalbiasofien@hotmail.com/deals/35ee93e5-976f-2196-dd6b-928d75cd8a07.png",type:"Camping",title:"QUAD EN FORÊT",descriptif:"SC GUEST QUAD ",prix:"50dt",button:"More details",rate:4,position:"Grand Tunis"},
{image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/toutou.leclown@gmail.com/deals/6e76a652-2724-b9f9-dfad-4a0f1d934064.png",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:5,position:"Cap Bon"},
{image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/toutou.leclown@gmail.com/deals/6e76a652-2724-b9f9-dfad-4a0f1d934064.png",type:"loisir",title:"ANIMATION",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:3,position:"Bizerte"},
{image:"https://cdn.niwees.net/fit-in/452x240/filters:format(jpeg):quality(60)/advertisers/toutou.leclown@gmail.com/deals/6e76a652-2724-b9f9-dfad-4a0f1d934064.png",type:"Camping",title:"CAMPING",descriptif:"Le clown toutou",prix:"50dt",button:"More details",rate:2,position:"Monastir"}
]

const reducer_filtr = (state=tab,action) => 
{
    switch(action.type){
        case 'FILTER_REG' :if( action.typeact=='' )  return tab.filter(elt =>elt.position === action.pos) ;else if(action.typeact!=='') return tab.filter(elt =>(elt.position == action.pos)&&(elt.type === action.typeact)); 
        case 'FILTER_ACT' :if (action.pos=='') return tab.filter(elt =>elt.type == action.typeact) ;else return tab.filter(elt =>(elt.type == action.typeact)&&(elt.position == action.pos))
        case 'ALL_ACT' :if (action.pos !=='')return tab.filter(elt =>elt.position === action.pos);else if (action.typeact=='all')return tab
        case 'ALL_REG' : if(action.typeact !=='')return tab.filter(elt =>elt.type == action.typeact) ; else return tab
        default :return  tab;
    }
}
export default reducer_filtr