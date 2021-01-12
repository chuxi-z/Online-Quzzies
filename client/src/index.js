import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom' 

import store from './store/store'
import App from './App'
import quizzes from './view/quizzes';
import result from './view/result';





ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' exact component={App}></Route>
      <Route path='/quizze' component={quizzes}></Route>
      <Route path='/result' component={result}></Route>
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);
