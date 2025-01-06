import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

//修改了class -> className && style="" -> style={{}}
export default class App extends Component {
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">

                    <Header />

                    <List/>

                    <Footer/>

                </div>
            </div>
        )
    }
}