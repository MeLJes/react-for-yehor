import React, { Component } from 'react'

// function Counter () {
//   return (
//     <div>Counter</div>
//   )
// }

class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render () {
    return (
      <div>
        <h3>Counter {this.props.id}</h3>
        <div>{this.state.counter}</div>
        <button
          onClick={() => this.setState({
            counter: this.state.counter + 1
          })}
        >
          Increment
        </button>
      </div>
    )
  }
}

export default Counter
