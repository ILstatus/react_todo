import React, { Component } from 'react'

export default class Footer extends Component {
  changeTodo = () => {
    this.props.addTodo(this.inputTodo.value);
    this.inputTodo.value= null
  }
  render() {
    return (
      <div id="input">
          <input className="input" ref={c=>this.inputTodo = c}  type="text" placeholder="添加todo"/>
          <button  className="btn" onClick={this.changeTodo}>添加</button>
        </div>
    )
  }
}
