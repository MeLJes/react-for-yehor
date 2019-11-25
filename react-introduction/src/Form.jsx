import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render () {
    return (
      <div>
        <label>
          Name:
          <input
            name='name'
            onChange={this.handleChange}
          />
        </label>
        {/* <div>My name is {this.state.name}</div> */}
        <div>
          {this.state.name ? `My name is ${this.state.name}` : 'Please provide name'}
        </div>
      </div>
    )
  }
}
