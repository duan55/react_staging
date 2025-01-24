import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        return (
            <div className="row">

                {
                    this.props.users.map((userObj) => {
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
