import React, { Component } from "react"

export default class SelectInput extends Component {
  state = {
    option: [
      {
        name: "Vui lòng chọn độ ưu tiên công việc",
        value: null,
      },
      {
        name: "Thấp",
        value: "Thấp",
      },
      {
        name: "Trung bình",
        value: "Trung bình",
      },
      {
        name: "Cao",
        value: "Cao",
      },
    ],
  }
  render() {
    return (
      <div className='mt-5'>
        <p className=' font-inter font-medium text-xl'>Độ ưu tiên</p>
        <select onChange={this.props.onChangeRate} value={this.props.value} className='w-full h-14 p-3 my-2 border-2 border-red-300 rounded-md'>
          {this.state.option.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}
