import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, error } = this.props
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
