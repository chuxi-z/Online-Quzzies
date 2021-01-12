import React from 'react';
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'

import '../assets/css/style.css'


class App extends React.Component{

  constructor(){
    super()
  }


  gotoQuestionPage = () =>{
    this.props.history.push('/')
  }
  
  render(){
    return <div>
      <h1>You got {this.props.location.state.score}</h1>
      <Button onClick={this.gotoQuestionPage}>Try again</Button>
    </div>
    
  }
}
  
  
  
  export default connect(
    state => ({questionList: state.questionList}),
    {}
  )(App)
 