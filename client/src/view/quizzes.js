import React from 'react';
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'

import {getQuestionAsync} from '../store/actions'
import loadingImg from '../assets/img/loading.gif'
import '../assets/css/style.css'


class App extends React.Component{

  constructor(){
    super()

    this.state = {
      current: 0,
      questionList: []
    }
  }

  componentWillMount(){
    this.props.getQuestionAsync()
  }


  answerEvent = () =>{
    let {current} = this.state

    this.setState({
      current: ++current
    })
  }
  
  render(){
    let questions = this.props.questionList
    let {current} = this.state
    console.log(questions);

    if(questions.length > 0){
      let options = JSON.parse(questions[current].options)
      return <div className="questionPage">
        <h2>
          {current+1}--Question: {questions[current].quiz}
        </h2>
        <div className="options">
          Options: {
            options.map((item, index) =>{
              return (
                <div className="optionItem" key={index} onClick={this.answerEvent}>
                  {index+1} : {item}
                </div>
              )
            })
          }
        </div>
      </div>
    }
    else{
      return <div>
        <img src={loadingImg} alt="Loading..."></img>
      </div>
    }
    
  }
}
  
  
  
  export default connect(
    state => ({questionList: state.questionList}),
    {getQuestionAsync}
  )(App)
 