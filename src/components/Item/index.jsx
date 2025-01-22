import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false}

  handleMouse = (isEnter) => {
    return () => {
      //返回值不写成函数的话，打开页面时就会触发那些事件函数
      this.setState({mouse:isEnter})  
    }
  }

  render() {
    const {id,text,done} = this.props
    const {mouse} = this.state
    return (
      //设置【高亮背景色(灰/白)】与鼠标移入移出触发函数
      <li style={{backgroundColor:mouse?'#ddd':'#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked = {done}/>
          {/* <span>{id}==&gt;{text}</span> */}
          <span>&gt;{text}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
