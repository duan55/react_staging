//创建[外壳]组件App

//{}并非解构赋值，而是导入单独暴露的属性！！！等价于const { Component } = React  
import React, { Component } from 'react'

import Hello from './components/Hello'
import Welcome from './components/Welcome'

//创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}

//默认暴露与分别暴露*
//暴露App组件之后，index.js入口文件才能引入该组件并渲染到页面上
// export default App;
//优化掉了，可以直接在声明的场合暴露