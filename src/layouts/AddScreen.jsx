import React, { Component } from "react"
import logo from "../assets/images/img1.svg"
import Input from "../components/inputs/Input"
import Button from "../components/buttons/Button"
import SelectInput from "../components/inputs/SelectInput"

export default class AddScreen extends Component {
  state = {
    title: "",
    rate: "",
  }
  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    })
  }
  onChangeRate = (e) => {
    this.setState({
      rate: e.target.value,
    })
  }
  handleAddTodo = () => {
    if (!this.state.title || !this.state.rate) {
      alert("Bạn đã nhập thiếu Tiêu đề hoặc Độ ưu tiên. Vui lòng kiểm tra lại nhé !!!")
      return
    }
    let backToHome = false
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
      rate: this.state.rate,
    }
    this.props.addTodo(todo, backToHome)
  }
  render() {
    return (
      <main
        className='w-screen h-screen p-4 
      before:content-[""] before:w-48 before:h-48 before:rounded-full before:bg-red-500 before:opacity-75 before:absolute before:top-[-122px] before:left-[-33px]
      after:content-[""] after:w-40 after:h-40 after:rounded-full after:bg-red-500 after:opacity-75 after:absolute after:top-[-30px] after:left-[-115px]'
      >
        <h2 className='mt-16 mx-auto font-inter font-medium text-xl text-center'>Tạo lịch trình cần làm mới nào !</h2>
        <img src={logo} alt='Logo' className='mx-auto my-4' />
        <Input
          onChangeTitle={(e) => this.onChangeTitle(e)}
          type='text'
          title='Tiêu đề'
          placeholder='Vui lòng nhập tiêu đề công việc'
        />
        <SelectInput value={this.state.rate} onChangeRate={(e) => this.onChangeRate(e)} />
        <Button title='Thêm' addNewTodo={this.handleAddTodo} />
      </main>
    )
  }
}
