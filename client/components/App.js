import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import Component from 'react';
import Accordion from './Accordion';
import Reducer from '../reducers/Reducer';
import * as Actions from '../actions/todos';

// App.js


export  class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

   //this.props.props.actions.itemsFetchData('http://www.mocky.io/v2/5afac4592e00005a002790e5');
  this.props.props.actions.fetchDev();

  }
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps");
console.log(nextProps)

  }

  componentDidMount() {
 console.log('componentDidMount -- LifeCycle --');
 console.log(this.props.props);

  }


  render(){
   
 
    console.log(this.props);

    console.log(this.props.props);
    return(
            <div>
          {console.log('maticha7')}
         { console.log(this.props.props.state)}

      <Accordion props={this.props.props.state}   />
    </div>
    )
  }


}





/*const mapStateToProps = state => ({
  todos: state.todos

})
*/
const mapDispatchToProps = dispatch => ({

 
  actions: bindActionCreators(Actions, dispatch)

})
function mapStateToProps(state) {
  console.log('Map');
  console.log(state);
  return {
     state
  }
}



export class ConnectedApp extends React.Component {  
  constructor(props) {
    super(props);
    console.log('jojo2');
    console.log(this.props);
  
  
  } 
  componentDidMount() {
    console.log('jojo');
    console.log(this.props);
  }

  render() {
    console.log('jojo3');
    console.log(this.props);
    return (
      <App props={this.props}/>
    )
  }
}
  

export default connect(mapStateToProps,mapDispatchToProps)(ConnectedApp)

