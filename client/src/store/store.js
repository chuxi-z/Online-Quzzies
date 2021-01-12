import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import {composeWithDevTools} from "redux-devtools-extension/index";

import reducer from './reducer'

export default createStore(reducer, applyMiddleware(thunk))