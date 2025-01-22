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
            { id: 1, text: '吃饭', done: true },
            { id: 2, text: '睡觉', done: false },
            { id: 3, text: '写代码', done: false }
        ]
    }

    //用于接受子组件Header传递的todo对象
    addTodo = (todoObj) => {
        //子组件调用也还是父组件的this
        console.log(this.state)
        //获取原todos
        const { todos } = this.state
        //将新todo对象添加到todos数组的最前方
        const newTodos = [todoObj, ...todos]
        //更新状态
        this.setState({ todos:newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">

                    <Header addTodo = { this.addTodo } />

                    <List todos = { todos } />

                    <Footer/>

                </div>
            </div>
        )
    }
}