import React from 'react';
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'



class App extends React.Component{
  
  gotoQuestionPage = () =>{
    this.props.history.push('/quizze')
  }
  
  
  render(){
    return <div>
      <Button onClick={this.gotoQuestionPage}>start quizzes</Button>
    </div>
  }
}
  
  
  
  export default connect(
    state => ({count: state}),
    {}
  )(App)
