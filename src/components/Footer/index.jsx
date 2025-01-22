import React, { Component } from 'react'
import './index.css'

export default class footer extends Component {

  ///一键全选或者反选
  handleCheckAll = (event) => {
    const flag = event.target.checked
    console.log(flag)
    this.props.checkAll(flag)
  }

  //一键清空已经完成的任务
  handleClearAll = () => {
    if(confirm('确定清除所有已完成的任务吗？')){
      this.props.clearAll()
    }
  }

  render() {
    //解构获取todos
    const { todos } = this.props
    //获取已完成任务数量
    // const completedCount = todos.filter(todo => todo.done === true).length
    //接下来使用reduce进行统计已经完成的任务数量
    // const completedCount = todos.reduce((pre, todo) => {return pre + (todo.done? 1 : 0)}, 0) //初始值为{,0} 
    const completedCount = todos.reduce((pre, todo) => pre + (todo.done? 1 : 0), 0) //初始值为{,0} 
    //获取所有任务数量
    const totalCount = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={completedCount === totalCount && totalCount !== 0 ? true : false} /> 
        </label>
        <span>
          <span>已完成 {completedCount} </span> / 全部 {totalCount}
        </span>
        <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
