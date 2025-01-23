import React, { Component } from 'react'

export default class search extends Component {

    //用户搜索
    searchUser = () =>{
        //1.获取用户的输入，button绑定了事件但是要获取input的输入需要使用ref、受控组件表单
        //连续解构赋值直接获取到value并将其重命名为keyword，但是后文如果去取inputSth则会提示并没有解构得到inputSth
        const {inputSth:{value:keyword}} = this
        console.log(keyword)
        //2.发送网络请求
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
