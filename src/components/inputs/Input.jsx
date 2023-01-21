import React, { Component } from "react"

export default class Input extends Component {
  render() {
    return (
      <div className='mt-2'>
        <p className=' font-inter font-medium text-xl'>{this.props.title}</p>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.valueState}
          onChange={this.props.onChangeTitle}
          className='w-full h-14 p-3 my-2 border-2 border-red-300 rounded-md'
        />
      </div>
    )
  }
}
