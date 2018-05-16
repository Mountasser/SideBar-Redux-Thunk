import React from 'react';
import AccordionItemLeaf from './AccordionItemLeaf';
import * as Utils from './utils';
import classnames from 'classnames'
export default class   AccordionItemBranch  extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.getChildrenWithProps = this.getChildrenWithProps.bind(this);
    this.fetchData = props.fetchData;
  this.toggleSection = this.toggleSection.bind(this);
  this.state = {
    singleOpen: this.props.singleOpen,
    openByDefault: this.props.openByDefault,
    activeSections: [],
  };
  //this.toto = getChildrenWithProps.bind(this);
  console.log(this.props);
  console.log(this.getChildrenWithProps(this.props.branches));
  this.branches=props.branches;

}


  componentWillMount() {
    const {
      singleOpen,
      openByDefault,
      uniqId } = this.props;

    const settings = {
      singleOpen,
      openByDefault,
      uniqId,
      kids:this.props.branches
    };

    const initialStateSections = Utils.setupAccordion(settings).activeSections;
    this.setState({ activeSections: initialStateSections });
  }


  getChildrenWithProps = (props) => {
   
     console.log(props);
    
     
       
       if(props.length > 0){   
       // console.log(typeof Utils.StringToJsonArray(props))
        console.log(Utils.StringToJsonArray(props))

      return(
     
      Utils.StringToJsonArray(props).map((item,index) =>
      
      <AccordionItemLeaf  index={item.index}  section={item}  toggle={(acId) => this.toggleSection(acId)}
        
      key={`acc-sec-${index}`} unq={`acc-sec-${index}`}  active={(this.state.activeSections && this.state.activeSections.lastIndexOf(`acc-sec-${index}`) !== -1)} children={item.Leafs}/>
    
      
    )    
    
    
    );}
   
    } 

  toggleSection(sectionId) {
    const newActive = Utils.toggleSection(
      sectionId,
      this.state.activeSections,
      this.state.singleOpen);

    this.setState({
      activeSections: newActive
    });
  }
     //  console.log(listLeafsJSXFn(props.props));


        //////Appeler Asynchrone Messaging to Get Json and fill EndPointsNumber

        render() {
          const {
            className: propClasses,
            uniqId: propId
          } = this.props;
     console.log(this.props);
          const childrenWithProps = this.getChildrenWithProps(this.props.branches);
          const accordionClasses = classnames('react-accordion', propClasses);
          const uniqId = propId || '';
          console.log("moko");
          return(
            <div className={accordionClasses} id={uniqId}>
              {childrenWithProps}
            </div>
          );
        }
  }

    

