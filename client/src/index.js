import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom' 

import store from './store/store'
import App from './App'
import quizzes from './view/quizzes';





ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' exact component={App}></Route>
      <Route path='/quizze' component={quizzes}></Route>
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);
