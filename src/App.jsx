import React, { Component } from 'react'
// import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  //初始化状态，users为数组
  state = { users:[] }

  //存入Search组件查询得到的用户数据
  saveUsers = (users) => {
    this.setState({ users })
  }

  render() {
    const { users } = this.state
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers}/>
        <List users={users}/>
      </div>
    )
  }
}
