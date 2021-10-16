import React, { Component } from 'react'

export default class Header extends Component {
  handleCheked = (id) => {
    return (e) => {
      this.props.updateTodo(id,e.target.checked)
   } 
  }

  handDelete = (id) => {
    this.props.deleteTodo(id)
  }

  render() {
    let { lists } = this.props;
    return (
      <ul>
          {
          lists.map(item => {
            return (
              <li key={item.id}>
                <input type="checkbox" checked={item.done} onChange={this.handleCheked(item.id)}/>
                <span style={{textDecoration:item.done?"line-through":"none"}} >{item.msg}</span>
                <button onClick={()=>{this.handDelete(item.id)}}>移除</button>
              </li>
              )
            })
          }
        </ul>
    )
  }
}
