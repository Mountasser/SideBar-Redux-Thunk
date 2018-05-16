import React from 'react';
import classnames from 'classnames'

export default class AccordionItemLeaf extends React.Component{


  constructor(props){
        super();
        
   this.section=props.section;
      this.props=props;
      this.toggleSection = this.toggleSection.bind(this);
      this.state = {
        sectionHeight: 0,
      }
      this.RenderSections_ul = this.RenderSections_ul.bind(this);

      this.RenderSections_li = this.RenderSections_li.bind(this);

console.log(this.section);
    }

    RenderSections_ul = (props) => {

   
      
      return(
   <ul class="sidebar-nav" id="sidenav" >{this.RenderSections_li(props.Leafs)}</ul>
       
     
     
     
     );
    
     }

     RenderSections_li = (leafs) => {
   
      
      return(
       leafs.map((leaf,index) =>
       <li><span class="sub_icon glyphicon glyphicon-link"><a>{leaf.title}</a>
       </span></li>
       
     )
     
     
     );
    
     }



    componentDidMount() {
      const { active } = this.props;
      if (active) this.setState({sectionHeight: this.accordionContent.scrollHeight});
    }
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.props.active) {
        this.toggleOpen(nextProps.active);
      }
    }
  
    getHeight() {
      const { active } = this.props;
      return (active) ? this.accordionContent.scrollHeight : 0;
    }
  
    toggleSection() {
      const {
        unq,
        toggle
      } = this.props;
      toggle(unq);
    }
  
    toggleOpen(active) {
      const height = (active) ? `${this.accordionContent.scrollHeight}px` : 0;
      this.setState({
        sectionHeight: height,
      });
    }
  
  
    render(){
        //////Appeler Asynchrone Messaging to Get Json and fill EndPointsNumber

        const {
          title,
          
          active,
          className: propClasses
        } = this.props;
    
    
        const contentStyles = {
          height: this.state.sectionHeight,
          overflow: 'hidden',
          transition: 'height .25s ease',
          fontFamily: 'sans-serif',
          padding: 0,
          background: '#bdc3c7'
        };
    
        const triggerStyles = {
          background: '#ecf0f1',
          padding: '0px',
          fontFamily: 'sans-serif',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          cursor: 'pointer',
          transition: 'background .25s ease'
        }
    
        const innerContentStyles = {
          padding: '0px'
        }
    
        const triggerClasses = classnames('accordion-trigger accordion-title', {
          active
        });
    
        const contentClasses = classnames('accordion-content accordion-inner', {
          active
        });
      return (
        <div className="accordion-section">
        <div className={triggerClasses} style={triggerStyles} onClick={() => this.toggleSection()}>
{this.section.titre}
        </div>
        <div className={contentClasses} style={contentStyles} ref={(ref) => this.accordionContent = ref}>
          <div className="inner-content" style={innerContentStyles}>
         
          {this.RenderSections_ul(this.section)}

          </div>
        </div>
      </div>
      
      
       );
       

    };
}
