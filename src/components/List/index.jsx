import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    // 取出App父组件传递的todos数据
    const { todos } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map( (todo) =>{
            //需要传递key，尽量使用【唯一标识】而不是使用index
            //批量传递todo数据，使用...todo {展开运算符}
            //const {id,name,done} = todo 这叫解构赋值
            //... 叫对象展开运算符、(展开)拓展运算符，展开可迭代对象的元素
            return <Item key={todo.id} {...todo} />
            // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
          })
        }
      </ul>
    )
  }
}
