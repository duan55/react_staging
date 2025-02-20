import React, { Component } from 'react'

export default class News extends Component {
    //news挂载两秒后自动跳转到message页面；
    componentDidMount() {
        console.log('News component did mount')
        setTimeout(() => {
            //跳转到message页面
            this.props.history.push('/home/message')
        }, 2000);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>news001</li>
                    <li>news002</li>
                    <li>news003</li>
                </ul>
            </div>
        )
    }
}
