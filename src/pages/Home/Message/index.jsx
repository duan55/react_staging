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

    //点击按钮切换到指定页面，并不留下历史记录(Link NavLink在代码里写不了一点，因为他们需要被点击才能够触发，现在需要直接通过代码实现跳转)
    replaceCheckInfo = (id,title) => {
        //使用history的API，replace方法可以替换当前历史记录，不会留下历史记录
        //(1)replace跳转+携带params参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

        //(2)replace跳转+携带query参数/search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        //(3)replace跳转+携带state参数
        // this.props.history.replace({pathname:`/home/message/detail`,state:{id,title}})//像{id:id,title:title}左值与形参一模一样的场合可以略写
        // this.props.history.replace(`/home/message/detail`,{id,title})
    }

    //留痕压栈跳转
    pushCheckInfo = (id,title) => {
        //使用history的API，push方法可以添加新的历史记录，不会替换当前历史记录
        //(1)push跳转+携带params参数
        this.props.history.push(`/home/message/detail/${id}/${title}`)

        //(2)push跳转+携带query参数/search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        //(3)push跳转+携带state参数
        // this.props.history.push({pathname:`/home/message/detail`,state:{id,title}})
        // this.props.history.push(`/home/message/detail`,{id,title})
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
                                    <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>

                                    {/* （2）向路由组件传递search参数 ~ ajax的query参数*/}
                                    {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                                    {/* （3）向路由组件传递state参数 之前的to后面都接的字符串，现在需要传入对象{{}}，外层{}为js表达式，内层为对象*/}
                                    {/* <Link replace={false} to={{pathname: '/home/message/detail', state:{id:item.id,title:item.title}}}>{item.title}</Link> */}

                                    &nbsp;&nbsp;
                                    <button onClick={()=>this.pushCheckInfo(item.id,item.title)}>push查看</button>
                                    &nbsp;
                                    <button onClick={()=>this.replaceCheckInfo(item.id,item.title)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* （1）声明接收params参数，被传入到了match对象中params属性里 */}
                <Route path="/home/message/detail/:id/:title" component={Detail} />

                {/* （2）search参数无需声明接收，正常注册路由即可 --- 因为search参数在声明中增加了？，参数会被自动识别，路由中无需更多额外动作*/}
                {/* <Route path="/home/message/detail" component={Detail}/> */}

                {/* （3）state参数无需声明接收，正常注册路由即可*/}
                {/* <Route path="/home/message/detail" component={Detail}/> */}

                <button onClick={()=>this.props.history.goBack()}>返回</button>
                <button onClick={()=>this.props.history.goForward()}>前进</button>
                <button onClick={()=>this.props.history.go(-2)}>前进或后退n步(此处为-2,后退两步)</button>

            </div>
        )
    }
}
