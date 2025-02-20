20250220
p92 之后
路由组件传参出现异常：
params、search的传参都没有问题，默认方式都为push
但是state传参除了第一次为push，之后变成了replace，但是编程式导航又是对的，修改replace={false}也不起作用
猜测可能是因为npm install --save-dev @babel/plugin-proposal-private-property-in-object
但是卸载之后也不起作用，于是选择先不用state了

p95
antd按需加载样式和代码的原理是什么?
什么是 antd 的 JS 代码默认支持基于 ES modules 的 tree shaking？
shift+alt