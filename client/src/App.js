import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'

import {a, b} from './store/actions'


class App extends React.Component{

    state = {
      question: null
    }
  
    async componentWillMount(){
      let page = 2
      let address = `http://localhost:8080/api/question?page=${page}`
      let res = await axios.get(address)
  
      console.log(res.data);
      this.setState({
        question: res.data.toString()
      })
    }
  
  
    render(){
      return <div>
        {this.state.question}
      </div>
    }
  }
  
  
  
  export default connect(
    state => ({count: state}),
    {a, b}
  )(App)
