import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <ul className="nav nav-tabs">
          {/* 每一次路由匹配都是从左到右，先要进到home中才能继续匹配news和message */}
          {/* 如果在这之前开启了严格匹配，那么进入/home中有news与message两个路由项，选择任一后因为路由会去匹配最先注册的，即/home与/about路由层，
          因为严格匹配后/home/news中不符合这两者，走重定向到/about，会发现永远不会匹配到/home/message，因为/home/message已经被重定向 */}
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
          <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        {/* 注册路由 */}
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    )
  }
}
