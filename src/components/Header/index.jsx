import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'   //引入withRouter函数(并非组件，因此其名称为小写)

class Header extends Component {

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  itsMygo = (n) => {
    this.props.history.go(n)
  }

  render() {
    console.log("Header接受到的props为: ",this.props)
    return (
      <div>
        <div className="page-header"><h2>React Router Demo</h2></div>
        <button onClick={() => this.back()}>返回</button>
        <button onClick={() => this.forward()}>前进</button>
        <button onClick={() => this.itsMygo(-1)}>前进或后退n步(此处为-1,后退1步)</button>
      </div>
    )
  }
}

export default withRouter(Header) //暴露被withRouter函数包装过的Header组件(有了history属性)
