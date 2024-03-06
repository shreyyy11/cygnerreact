import React, { Component } from 'react'

export class Form extends Component {

constructor(props) {
  super(props)

  this.state = {
     username:'',
     Comment:'',
     topic:'react'
  }
}

handleUsernameChange = (event) => {
    this.setState({
        username: event.target.value
    })

}

handlecommentchange = (event) => {
    this.setState({
        Comment: event.target.value
    })
}
handleTopicChange = (event) => {
    this.setState({
        topic: event.target.value
    })
}
handleSubmit = event => {
    alert(`${this.state.username} ${this.state.Comment} ${this.state.topic}`)
    event.preventDefault()
}

  render() {
    const{ username,Comment,topic}= this.state
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                    <label>Username</label>
                    <input type='text'  value={username} onChange={this.handleUsernameChange}/><br/>
                    <label>Password</label>
                    <input type='Password'/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={Comment} onChange={this.handlecommentchange}></textarea>
            </div>
            <div>
                <label>topic</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value='react' >React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form
