import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    //对接收的props进行: 类型 & 必要性的限制
    static propTypes = {
      //限制{todos}为一个[必传]的[数组]
      todos: PropTypes.array.isRequired,
      //限制{updateTodo}为一个[必传]的[函数]
      updateTodo: PropTypes.func.isRequired
    }

  render() {
    // 取出App父组件传递的todos数据
    const { todos, updateTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map( (todo) =>{
            //需要传递key，尽量使用【唯一标识】而不是使用index
            //批量传递todo数据，使用...todo {展开运算符}
            //const {id,name,done} = todo 这叫解构赋值
            //... 叫对象展开运算符、(展开)拓展运算符，展开可迭代对象的元素
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} />
            // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
          })
        }
      </ul>
    )
  }
}
