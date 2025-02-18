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
                <h4>It's MyGo!!!!!</h4>
                <ul>
                    {
                        messageArr.map(item => {
                            return (
                                <li key={item.id}>
                                    {/* （1）向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

                                    {/* （2）向路由组件传递search参数 ~ ajax的query参数*/}
                                    {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                                    {/* （3）向路由组件传递state参数 之前的to后面都接的字符串，现在需要传入对象{{}}，外层{}为js表达式，内层为对象*/}
                                    <Link to={{pathname: '/home/message/detail', state:{id:item.id,title:item.title}}}>{item.title}</Link>

                                </li>
                            )
                        })
                    }
                </ul>
                {/* （1）声明接收params参数，被传入到了match对象中params属性里 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} />*/}

                {/* （2）search参数无需声明接收，正常注册路由即可 --- 因为search参数在声明中增加了？，参数会被自动识别，路由中无需更多额外动作*/}
                {/* <Route path="/home/message/detail" component={Detail}/>*/}

                {/* （3）state参数无需声明接收，正常注册路由即可*/}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
}
