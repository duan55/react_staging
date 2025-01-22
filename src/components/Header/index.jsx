import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  handleKeyUp = (event) => {
    //获取按下的键是哪一个,event.keyCode是按键的ASCII码已经要被废除了
    // console.log(event.target.value, event.keyCode)
    // console.log(event.target.value, event.key)
    //解构赋值获取按下的key和输入的target
    const { key,target } = event
    //检测到'回车'
    if (key === 'Enter') {
      //去完空格之后如果无实质内容则报错提示
      if(target.value.trim() === ''){
        alert('输入不能为空')
        return;
      }
        //封装todo对象,id使用nanoid(uuid生成)
        const todoObj = {id:nanoid(),text:target.value,done:false}  
        this.props.addTodo(todoObj)
        //清空输入框
        target.value = ''
    }
    //现在需要将Header的值传递给App，更新其todos从而使得List中的Item  得到更新
    //子组件想要给父组件传值，需要父组件给子组件一个回调函数，然后在子组件的事件中调用该回调函数，将值传给父组件
  }


  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
