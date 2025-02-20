import React, { Component } from 'react'
import {NavLink} from'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    const {to} = this.props
    return (
        // <NavLink activeClassName="chenhs" className="list-group-item" to={to}>{this.props.children}</NavLink>
        <NavLink activeClassName="chenhs" className="list-group-item" {...this.props}/>
    )
  }
}
