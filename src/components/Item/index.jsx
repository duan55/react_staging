import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    const {id,text,done} = this.props
    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked = {done}/>
          <span>{id}==&gt;{text}</span>
        </label>
        <button className="btn btn-danger" style={{ display: 'none' }}>删除</button>
      </li>
    )
  }
}
