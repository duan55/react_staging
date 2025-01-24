import React, { Component } from 'react'
// import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  //初始化状态
  state = { 
    users:[], //users为数组 
    isFirst: true, //用于判断是否是第一次加载页面
    isLoading: false, //用于判断是否正在加载数据
    error:'' //存放错误信息
  }

  //存入Search组件查询得到的用户数据
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
