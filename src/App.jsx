import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

//修改了class -> className && style="" -> style={{}}
export default class App extends Component {

    //初始化状态
    state = {
        todos: [
            { id: 1, text: '吃饭', done: false },
            { id: 2, text: '睡觉', done: false },
            { id: 3, text: '写代码', done: false }
        ]
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">

                    <Header />

                    <List todos={todos} />

                    <Footer/>

                </div>
            </div>
        )
    }
}