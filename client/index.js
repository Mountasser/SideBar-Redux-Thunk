
import ConnectedApp from './components/App';

import {itemsFetchData} from './actions/todos';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {fetchDev} from './actions/todos'
import App from './components/app';
import reducers from './reducers/index_Reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// Wrap existing app in Provider - Step 2
//console.log(createStoreWithMiddleware(reducers));
//storestore.dispatch(itemsFetchData('http://www.mocky.io/v2/5afac4592e00005a002790e5'));
const store = createStoreWithMiddleware(reducers);
store.dispatch(fetchDev());
console.log("------------------state Chaaaaange------------");
console.log(store.getState());

const render = () => {
ReactDOM.render(
  <Provider store={store}>

  <ConnectedApp/>
  
  </Provider>,document.getElementById("app")
);
};
render();

export default store;