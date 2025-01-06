import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>要做的事项</span>
        </label>
        <button className="btn btn-danger" style={{ display: 'none' }}>删除</button>
      </li>
    )
  }
}
