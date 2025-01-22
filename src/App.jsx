import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

//修改了class -> className && style="" -> style={{}}
export default class App extends Component {
    //状态在哪里，操作状态的方法就在哪里

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

    //Item组件更新done状态，需要App组件先传递给Item的父组件List，再由List传递给Item
    updateTodo = (id, newDone) => {
        //获取状态中的todos
        const { todos } = this.state
        //遍历todos数组，找到对应id的todo对象，更新done属性
        const newTodos = todos.map(todoObj => {
            if (todoObj.id === id) return {...todoObj, done:newDone }
            else return todoObj
        })
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">

                    <Header addTodo = { this.addTodo } />

                    <List todos = { todos } updateTodo = { this.updateTodo } />

                    <Footer/>

                </div>
            </div>
        )
    }
}