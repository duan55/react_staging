import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '1', title: 'cry1' },
            { id: '2', title: 'cry2' },
            { id: '3', title: 'cry3' }
        ]
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <h4>为什么要演奏春日影</h4>
                <ul>
                    {
                        messageArr.map(item => {
                            return (
                                <li key={item.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 声明接收params参数，被传入到了match对象中params属性里 */}
                <Route path="/home/message/detail/:id/:title" component={Detail} />
            </div>
        )
    }
}
