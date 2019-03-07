import React, { Component } from 'react';
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";


class CollapsePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  collapseID: "" }
    }
    
      
      toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    render() { 
        return ( <MDBContainer>
            <MDBContainer className="md-accordion mt-5">
              <MDBCard className="mt-3">
                <div style={{padding:'2%', display: "flex", justifyContent: 'space-between',backgroundColor:'rgba(219, 239, 244, 0.5)'}} onClick={this.toggleCollapse("collapse1")}>
                  Collapsible Group Item #1
                  
                  <i className={ this.state.collapseID==="collapse1" ? "fa fa-minus-square" : "fa fa-plus-square"  } style={{fontSize:'24px' }} />
                </div>
                <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                  <MDBCardBody>
                    Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                    bird on it squid single-origin coffee nulla assumenda shoreditch
                    et. Nihil anim keffiyeh helvetica, craft beer labore wes
                    anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                    butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                    raw denim aesthetic synth nesciunt you probably haven&apos;t
                    heard of them accusamus labore sustainable VHS.
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
      
              <MDBCard>
                <div style={{padding:'2%', display: "flex", justifyContent: 'space-between',backgroundColor:'rgba(219, 239, 244, 0.5)'}} onClick={this.toggleCollapse("collapse2")}>
                  Collapsible Group Item #2
                  <i className={ this.state.collapseID==="collapse2" ? "fa fa-minus-square" : "fa fa-plus-square"  } style={{fontSize:'24px' }} />
                </div>
                <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                  <MDBCardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia aute,
                    non cupidatat skateboard dolor brunch. Food truck quinoa
                    nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                    put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                    wes anderson cred nesciunt sapiente ea proident. Ad vegan
                    excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven&apos;t heard of them accusamus labore sustainable VHS.
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              <MDBCard>
                <div style={{padding:'2%', display: "flex", justifyContent: 'space-between',backgroundColor:'rgba(219, 239, 244, 0.5)'}} onClick={this.toggleCollapse("collapse2")}>
                  Collapsible Group Item #2
                  <i className={ this.state.collapseID==="collapse2" ? "fa fa-minus-square" : "fa fa-plus-square"  } style={{fontSize:'24px' }} />
                </div>
                <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                  <MDBCardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia aute,
                    non cupidatat skateboard dolor brunch. Food truck quinoa
                    nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                    put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                    wes anderson cred nesciunt sapiente ea proident. Ad vegan
                    excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven&apos;t heard of them accusamus labore sustainable VHS.
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
      
              <MDBCard>
                <div style={{padding:'2%', display: "flex", justifyContent: 'space-between',backgroundColor:'rgba(219, 239, 244, 0.5)'}} onClick={this.toggleCollapse("collapse3")}>
                  Collapsible Group Item #3
                  <i className={ this.state.collapseID==="collapse3" ? "fa fa-minus-square" : "fa fa-plus-square"  } style={{fontSize:'24px' }} />
                </div>
                <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                  <MDBCardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia aute,
                    non cupidatat skateboard dolor brunch. Food truck quinoa
                    nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                    put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                    wes anderson cred nesciunt sapiente ea proident. Ad vegan
                    excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven&apos;t heard of them accusamus labore sustainable VHS.
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </MDBContainer>
          </MDBContainer> );
    }
}
 
export default CollapsePage;