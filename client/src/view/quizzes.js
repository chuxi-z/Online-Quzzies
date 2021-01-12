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
      optionStyle: ["optionItem", "optionItem", "optionItem", "optionItem"],
      isChoose: false,
      score: 0,
      page: parseInt(Math.random()*1600)
    }
  }

  componentDidMount(){
    
    this.props.getQuestionAsync(this.state.page)
  }


  answerEvent = (index) =>{
    if(this.state.isChoose){
      return
    }

    this.setState({
      isChoose: true
    })

    let {current} = this.state
    let answer = this.props.questionList[current].answer
    let optionStyle = this.state.optionStyle

    if((index+1) === Number(answer)){
      optionStyle[index] = "optionItem correct"
      let {score} = this.state
      score += 10
      
      this.setState({
        optionStyle,
        score
      })
    }
    else{
      optionStyle[index] = "optionItem error"
      optionStyle[ Number(answer)-1] = "optionItem correct"

      this.setState({
        optionStyle: optionStyle
      })
    }

    setTimeout(() =>{
      let {current} = this.state
      current++
      if(current == 10){
        this.props.history.push('/result', {score: this.state.score})
      }

      this.setState({
        current,
        optionStyle: ["optionItem", "optionItem", "optionItem", "optionItem"],
        isChoose: false
      })
    },1000)
    
  }
  
  render(){
    let questions = this.props.questionList
    let {current} = this.state
    let ostyle = this.state.optionStyle
    // console.log(questions);

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
                <div className={ostyle[index]} key={index} onClick={() =>this.answerEvent(index)}>
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
 