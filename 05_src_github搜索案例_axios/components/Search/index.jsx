import React, { Component } from 'react'
import axios from 'axios'
import { error } from 'ajv/dist/vocabularies/applicator/dependencies'

export default class search extends Component {

    //用户搜索
    searchUser = () => {
        //1.获取用户的输入，button绑定了事件但是要获取input的输入需要使用ref、受控组件表单
        //连续解构赋值直接获取到value并将其重命名为keyword，但是后文如果去取inputSth则会提示并没有解构得到inputSth
        const { inputSth: { value: keyword } } = this
        //1.2 发送请求前更新state
        this.props.updateAppState({isFirst: false, isLoading: true, error: null})
        //2.发送网络请求
        //github后端使用cors解决了跨域问题，不再需要设置setupProxy.js
        //练习需要使用sgg提供的服务器访问地址
        // axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then( 发送的位置就是访问的位置，则http://ip+端口可以不写
        axios.get(`/api1/search/users?q=${keyword}`).then(
            response => {
                this.props.updateAppState({isFirst: false, isLoading: false, users: response.data.items})
            },
            error => {
                //此处不能直接存入错误对象，而是要存入错误对象的属性
                this.props.updateAppState({isFirst: false, isLoading: false, error: error.message})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c => this.inputSth = c} type="text" placeholder="输入需要搜索的用户名" />&nbsp;
                    <button onClick={this.searchUser}>搜索</button>
                </div>
            </section>
        )
    }
}
