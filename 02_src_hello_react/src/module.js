const React = {a: 1, b: 2, c: 3}

//分别暴露的形式暴露了Component
export class Component {
    
}

React.Component = Component

//默认暴露的方式暴露了React对象
export default React