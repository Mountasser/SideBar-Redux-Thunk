import React from 'react';
import AccordionItemBranch from './AccordionItemBranch';
export default class Accordion extends React.Component{


  constructor(props){
      super(props);
 this.props=props;
 //console.log(this.props.devReducer.Endpoints);
 //console.log(ListEndPointsJSXFn(this.props.props.Endpoints));

      }
      componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps Accordion");
        console.log("nextProps");

    
      }
      


    render(){
     // console.log( ListEndPointsJSXFn(this.props.props.Endpoints));
        //////Appeler Asynchrone Messaging to Get Json and fill EndPointsNumber
        console.log(this.props.props.devs);
console.log(this.props.props.devs.Endpoints);


    
       return    (

    <div>
   {ListEndPointsJSXFn(this.props.props.devs.Endpoints)}

       </div>)
       

    }
}



var ListEndPointsJSXFn=(props) => {
  console.log(props)

  
return(

  <AccordionItemBranch  branches = {props} singleOpen={true}
  uniqId={'testAccordion1'}/>



);
}
