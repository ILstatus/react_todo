import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { nanoid } from 'nanoid'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [
        {id:"01",msg:"learn english",done:false},
        {id:"02",msg:"learn guitar",done:true},
        {id:"03",msg:"weight less than 100",done:false},
        {id:"04",msg:"have 100,000 deposit",done:false},
      ]
    }
  }

  addTodo = (value) => {
    if (!value.replace(/\s*/g,"")) {
      alert('empty！！！')
      return false
    }
    const { lists } = this.state;
    let obj = {id:nanoid(),msg:value,done:false}
    const newTods = [obj, ...lists];
    this.setState({ lists: newTods });
    
  }

  deleteTodo = (todoId) => {
    const { lists } = this.state;
    let newTods = lists.filter(item => {
       return item.id !== todoId
      });
    if (window.confirm("true or false")) {
        this.setState({lists:newTods})
    } else {
        return
    }
  }

  updateTodo = (id,done) => {
    const { lists } = this.state;
    let newList =lists.map(item=> {
      if (item.id === id) {
        return {...item,done}
      } else {
        return item;
      }
    })
    this.setState({lists:newList})
  }


  render() {
    const { lists } = this.state;
    return (
      <div id="app">
        <h1>React rodo list</h1>
        <Header lists={lists} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
        <Footer addTodo={this.addTodo}/>
      </div>
    )
  }
}
