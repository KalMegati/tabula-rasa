import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/root';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';

import StyleSelector from './styles/StyleSelector'
import { composeWithDevTools } from 'redux-devtools-extension';

// let store = createStore(rootReducer, applyMiddleware(thunk))


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
  // other store enhancers if any
));

ReactDOM.render(
  <Router> {/* included as outermost level so Route can be included anywhere without calling another BrowserRouter */}
    <Provider store={store}>
      <StyleSelector /> 
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
