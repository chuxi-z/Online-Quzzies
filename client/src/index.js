import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom' 

import store from './store/store'
import App from './App'





ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App}></Route>
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);
