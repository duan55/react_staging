import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import { error } from 'ajv/dist/vocabularies/applicator/dependencies'


export default class search extends Component {

    //用户搜索(使用axios)
    searchUserAxios = () => {
        //1.获取用户的输入，button绑定了事件但是要获取input的输入需要使用ref、受控组件表单
        //连续解构赋值直接获取到value并将其重命名为keyword，但是后文如果去取inputSth则会提示并没有解构得到inputSth
        const { inputSth: { value: keyword } } = this
        //1.2 发送请求前通知List更新state
        PubSub.publish('github user info', { isFirst: false, isLoading: true, error: null })
        //2.发送网络请求
        //github后端使用cors解决了跨域问题，不再需要设置setupProxy.js
        //练习需要使用sgg提供的服务器访问地址
        // axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then( 发送的位置就是访问的位置，则http://ip+端口可以不写
        axios.get(`/api1/search/users2?q=${keyword}`).then(
            response => {
                //通知List更新state
                PubSub.publish('github user info', { isFirst: false, isLoading: false, users: response.data.items })
            },
            error => {
                //通知List更新state
                //此处不能直接存入错误对象，而是要存入错误对象的属性
                PubSub.publish('github user info', { isFirst: false, isLoading: false, error: error.message })
            }
        )
    }

    //用户搜索(使用fetch) 初版
    searchUserUnoptimized = () => {
        //1.获取用户的输入
        const { inputSth: { value: keyword } } = this
        //1.2 发送请求前通知List更新state
        PubSub.publish('github user info', { isFirst: false, isLoading: true, error: null })
        //2.发送网络请求
        fetch(`/api1/search/users2?q=${keyword}`).then(
            response => {
                //404也算联系成功，只要是有响应都算链接成功
                console.log('链接服务器成功',response)
                //通知List更新state
                //PubSub.publish('github user info', { isFirst: false, isLoading: false, users: response.data.items })
                //如果链接到服务器成功，则调用json方法
                return response.json()
            },
            error => {
                console.log('链接服务器失败',error)//如果失败的回调输出一行字，那么下面的then不会进到error中，因为会返回undefined(非promise值)状态为成功
                //手工中断
                return new Promise(()=>{})
                //通知List更新state
                // PubSub.publish('github user info', { isFirst: false, isLoading: false, error: error.message })
            }
        ).then(
            //.then 能够链式调用的一个原因就是其返回值也可以是一个Promise实例对象从而再次被.then使用
            //如果上一级返回不是一个promise实例，那么状态就默认为成功，值就为非promise值
            //如果是一个promise实例，则状态和值都与其一致，将作为下一个.then的promise入参进行使用，如抛出一个异常，则状态就为异常 且 值为错误的原因
            response => {
                console.log("获取数据成功", response)
            },
            error => {
                console.log("获取数据失败", error)
            }
        )
    }

    //用户搜索(使用fetch) 2.0
    searchUserOptimizedHalf = () => {
        //1.获取用户的输入
        const { inputSth: { value: keyword } } = this
        //1.2 发送请求前通知List更新state
        PubSub.publish('github user info', { isFirst: false, isLoading: true, error: null })
        //2.发送网络请求
        fetch(`/api1/search/users2?q=${keyword}`).then(
            response => {
                //404也算联系成功，只要是有响应都算链接成功
                console.log('链接服务器成功',response)
                //通知List更新state
                //PubSub.publish('github user info', { isFirst: false, isLoading: false, users: response.data.items })
                //如果链接到服务器成功，则调用json方法
                return response.json()
            },
        ).then(
            //.then 能够链式调用的一个原因就是其返回值也可以是一个Promise实例对象从而再次被.then使用
            //如果上一级返回不是一个promise实例，那么状态就默认为成功，值就为非promise值
            //如果是一个promise实例，则状态和值都与其一致，将作为下一个.then的promise入参进行使用，如抛出一个异常，则状态就为异常 且 值为错误的原因
            response => {
                console.log("获取数据成功", response)
            },
        ).catch(
            //.catch可以指定一个回调函数来处理Promise实例对象中发生的错误
            error => {
                console.log("!什么东西出错了!!", error)
            }
        )
    }

    //用户搜索(使用fetch) 3.0 不需要使用两次.then的链式调用来获取结果
    searchUser = async () => {
        //1.1 获取用户的输入
        const { inputSth: { value: keyword } } = this
        //1.2 发送请求前通知List更新state
        PubSub.publish('github user info', { isFirst: false, isLoading: true, error: null })
        //2.发送网络请求获取Promise对象 
        try
        //使用await的时候 要在函数前加上async关键字
        {   //2.1 await只会等到成功的结果，遇到错误会忽略 因此需要使用try...catch
            const response = await fetch(`/api1/search/users2?q=${keyword}`)
            //2.2 获取Promise中的value结果
            const result = await response.json()
            console.log("本次请求返回的结果为: ",result)
            PubSub.publish('github user info', { isFirst: false, isLoading: false, users: result.items })
        }
        catch(error){
            console.log("!什么东西出错了!!", error)
            PubSub.publish('github user info', { isFirst: false, isLoading: false, error: error.message })
        }

    }

    //键入回车直接搜索
    searchTrigger = (event) => {
        const { key, target } = event
        //检测到'回车'
        if (key === 'Enter') {
            //去完空格之后如果无实质内容则报错提示
            if (target.value.trim() === '') {
                alert('输入不能为空')
                return;
            }
            this.searchUser()
            target.value = ''
        }
    }

    //渲染
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c => this.inputSth = c} type="text" placeholder="输入需要搜索的用户名" onKeyUp={this.searchTrigger} />&nbsp;
                    <button onClick={this.searchUser}>搜索</button>
                </div>
            </section>
        )
    }
}
