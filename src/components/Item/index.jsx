import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {

  //对接收的props进行: 类型 & 必要性的限制
  static propTypes = {
    //限制{updateTodo}为一个[必传]的[函数]
    updateTodo: PropTypes.func.isRequired
  }

  state = { mouse: false } //鼠标移入移出状态

  //鼠标移入移出的回调函数
  handleMouse = (isEnter) => {
    return () => {
      //返回值不写成函数的话，打开页面时就会触发那些事件函数
      this.setState({ mouse: isEnter })
    }
  }

  //取消或勾选todo的回调函数
  handleCheckBoxChange = (id) => {
    //input绑定了时间且想要修改input的值的场合，可以使用event
    return (event) => {
      //传统input可以拿到value
      // console.log(id,event.target.value)
      //修改为checkbox之后，需要精确去拿对应的checked属性
      // console.log(id,event.target.checked)
      this.props.updateTodo(id, event.target.checked)
    }
  }

  render() {
    const { id, text, done } = this.props
    const { mouse } = this.state
    return (
      //设置【高亮背景色(灰/白)】与鼠标移入移出触发函数
      <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheckBoxChange(id)} />
          {/* <span>{id}==&gt;{text}</span> */}
          <span>&gt;{text}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
