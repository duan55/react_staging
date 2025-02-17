import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'          //Home是路由组件
import About from './pages/About'        //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

import Test from './pages/Test'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中靠<a>跳转不同的页面；而现在需要同一个页面展示不同的组件 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
              {/* 1、编写路由链接 在react中靠路由链接实现切换组件；注意Link需要被Router管理,但是如果多个地方都写了Router，其路由之间不能通信，所以可以直接将Router写在App组件外侧包裹所有，即直接在index.js中写Router*/}
              <MyNavLink to="/about" children="About"/>
              <MyNavLink to="/home"> Home </MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 2、注册路由 */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/* 该test组件永不触发，因为home会在上面被匹配，导致直接跳出遍历*/} 
                  <Route path="/home" component={Test} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
