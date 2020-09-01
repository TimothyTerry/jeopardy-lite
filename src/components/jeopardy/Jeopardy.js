
import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: [],
      score: 0,
      Answered: {
        answer: ""
      },

    }

  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }



  handleChange = (event) => {
    const Answered = { ...this.state.Answered }
    Answered[event.target.name] = event.target.value
    this.setState({
      Answered: {
        answer: event.target.value
      }
    })
  }

  handleAnswer = (event) => {

    event.preventDefault()

    let score = this.state.score
    if (this.state.data.answer === this.state.Answered.answer) {
      this.setState({
        score: score += this.state.data.value
      })
    }
    else {
      this.setState({
        score: score -= this.state.data.value
      })
    }

    this.getNewQuestion()
  }





  //display the results on the screen
  render() {

    let category = "loading"

    if (this.state.data.category) {
      category = this.state.data.category.title
    }





    return (
      <div>
        <strong> Question:{this.state.data.question} </strong> <br />
        <strong>Value:</strong>{this.state.data.value} <br />
        <strong>Category:{category}</strong><br />
        <b><em><p>Answer:{this.state.data.answer}</p></em></b>
        <div>Points:{this.state.score} </div>
        <div>Points:clue{this.state.random} </div>





        <form onSubmit={this.handleAnswer}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>




      </div>
    );
  }
}
export default Jeopardy;