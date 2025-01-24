import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    //初始化状态
    state = {
        users: [], //users为数组 
        isFirst: true, //用于判断是否是第一次加载页面
        isLoading: false, //用于判断是否正在加载数据
        error: '' //存放错误信息
    }

    //即将挂载时订阅
    componentDidMount() {
        //可以使用下划线占位，因为msg实际上已经传递了，(_, data)
        this.token = PubSub.subscribe('github user info',(msg,stataObj)=>{
            this.setState(stataObj)
        })
    }

    //组件将要卸载时取消订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const { users, isFirst, isLoading, error } = this.state
        //因为jsx中只有表达式，没有ifelse判断语句，但是有三元表达式，且三元表达式可以嵌套
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字进行搜索展示</h2> :
                        isLoading ? <h2>正在加载中...</h2> :
                            error ? <h2 style={{ color: 'red' }}>{error}</h2> :
                                users.map((userObj) => {
                                    //Warning: Each child in a list should have a unique "key" prop.
                                    //要在【map遍历的最外侧的结构上】加上key属性
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a href={userObj.html_url} rel="noopener noreferrer" target="_blank">
                                                <img alt="avatar" src={userObj.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
