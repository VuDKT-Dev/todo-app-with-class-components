import React, { Component } from "react"
import { BsFillPlusCircleFill } from "react-icons/bs"
import { BsPencil } from "react-icons/bs"
import { RiDeleteBin6Line } from "react-icons/ri"
import { AiOutlineSave } from "react-icons/ai"

export default class HomeScreen extends Component {
  render() {
    let { listTodos, editTodo } = this.props.state
    let isEmptyObj = Object.keys(editTodo).length === 0
    let toCreateTodoPage = true

    return (
      <>
        <main className='w-screen h-screen p-4 bg-orange-400'>
          <h1 className='font-poppins text-2xl font-bold my-12 text-center drop-shadow-xl'>
            Todo App with Class Function by Vũ Dev
          </h1>
          <div className='h-[400px] overflow-y-scroll'>
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item) => {
                return (
                  <div key={item.id} className='my-7'>
                    <div className='w-[340px] h-24 my-2 mx-auto border rounded-xl flex justify-between bg-white drop-shadow-lg shadow-slate-100 shadow-'>
                      <div className='ml-3 flex items-center'>
                        <div>
                          {isEmptyObj === false && editTodo.id === item.id ? (
                            <input
                              type='checkbox'
                              className='w-4 h-4 outline-none'
                              defaultChecked={item.completed}
                              onChange={this.props.handleChangeCompleted}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        <div className={item.completed ? "opacity-50 line-through ml-7" : "ml-7"}>
                          <div className='font-inter text-lg mb-4 font-semibold'>
                            {isEmptyObj === true ? (
                              <span>{item.title}</span>
                            ) : (
                              <>
                                {editTodo.id === item.id ? (
                                  <span>
                                    <input
                                      className='w-48 rounded-lg leading-4'
                                      type='text'
                                      value={editTodo.title}
                                      onChange={this.props.handleChangeEditTodo}
                                    />
                                  </span>
                                ) : (
                                  <span>{item.title}</span>
                                )}
                              </>
                            )}
                          </div>
                          <div className='w-20 h-6 border rounded-lg bg-red-50 text-sm font-semibold text-center text-green-500 shadow'>
                            <span>{item.rate}</span>
                          </div>
                        </div>
                      </div>
                      <span className='flex gap-5 items-center mr-5 text-red-400 text-xl'>
                        <button onClick={() => this.props.handleEditTodo(item)}>
                          {isEmptyObj === false && editTodo.id === item.id ? <AiOutlineSave /> : <BsPencil />}
                        </button>
                        <RiDeleteBin6Line onClick={() => this.props.handleDeleteTodo(item)} />
                      </span>
                    </div>
                  </div>
                )
              })}
          </div>
          <BsFillPlusCircleFill
            className='text-5xl absolute bottom-24 right-1/2 translate-x-1/2 text-red-600 drop-shadow-lg'
            onClick={() => this.props.linkToCreatePage(toCreateTodoPage)}
          />
        </main>
      </>
    )
  }
}
