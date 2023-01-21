import React, { Component } from "react"

export default class Button extends Component {
  render() {
    return (
      <button type='button' onClick={this.props.addNewTodo} className='w-32 h-12 block px-4 mt-10 mx-auto rounded-md bg-red-500'>
        {this.props.title}
      </button>
    )
  }
}
