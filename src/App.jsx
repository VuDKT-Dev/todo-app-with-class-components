import React, { Component } from "react"
import AddScreen from "./layouts/AddScreen"
import HomeScreen from "./layouts/HomeScreen"

export default class App extends Component {
  state = {
    listTodos: [
      {
        id: 1,
        title: "Learn React JS",
        rate: "Cao",
        completed: true,
      },
      {
        id: 2,
        title: "Learn Tailwind CSS",
        rate: "Thấp",
        completed: false,
      },
      {
        id: 3,
        title: "Learn Bootstrap",
        rate: "Trung",
        completed: false,
      },
    ],
    editTodo: {},
    editCompleted: {},
    createTodoPage: true,
  }

  addTodo = (todo, backHome) => {
    let listTodos = this.state.listTodos
    this.setState({
      listTodos: [todo, ...listTodos],
      createTodoPage: !backHome,
    })
  }

  handleEditTodo = (todo) => {
    let { editTodo, listTodos, editCompleted } = this.state
    let isEmptyObj = Object.keys(editTodo).length === 0
    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosClone = [...listTodos]
      let objIndex = listTodosClone.findIndex((item) => item.id == todo.id)
      listTodosClone[objIndex].title = editTodo.title
      listTodosClone[objIndex].completed = editCompleted.completed
      this.setState({
        listTodos: listTodosClone,
        editTodo: "",
      })
      return
    }

    //edit
    this.setState({
      editTodo: todo,
    })
  }
  handleChangeEditTodo = (e) => {
    let editTodoClone = { ...this.state.editTodo }
    editTodoClone.title = e.target.value
    this.setState({
      editTodo: editTodoClone,
    })
  }

  handleChangeCompleted = (e) => {
    let editCompletedClone = { ...this.state.editCompleted }
    editCompletedClone.completed = e.target.checked
    this.setState({
      editCompleted: editCompletedClone,
    })
  }

  handleDeleteTodo = (todo) => {
    let listTodos = this.state.listTodos
    let newTodo = listTodos.filter((item) => item.id !== todo.id)
    this.setState({
      listTodos: newTodo,
    })
  }

  linkToCreatePage = (todoPage) => {
    this.setState({
      createTodoPage: !todoPage,
    })
  }

  render() {
    let { createTodoPage } = this.state
    return (
      <>
        {createTodoPage === true ? (
          <HomeScreen
            state={this.state}
            handleEditTodo={this.handleEditTodo}
            handleChangeEditTodo={(e) => this.handleChangeEditTodo(e)}
            handleChangeCompleted={this.handleChangeCompleted}
            handleDeleteTodo={this.handleDeleteTodo}
            linkToCreatePage={this.linkToCreatePage}
          />
        ) : (
          <AddScreen state={this.state} addTodo={this.addTodo} />
        )}
      </>
    )
  }
}
