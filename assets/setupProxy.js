// react18之后这个写法已经被淘汰
//ES6语法import，CJS语法为require
// const proxy = require('http-proxy-middleware')// 按住ctrl这个东西变蓝，是因为这个'http代理中间件'在脚手架初始化的时候就被引入了

// //写一个对象或者函数都可以，为了兼容性这里选择写函数
// module.exports = function(app) {
//     app.use(
//         //只要请求url中出现了api1则会转发请求
//         proxy('/api1',{
//             target:'http://localhost:5000', //转发的目标地址
//             changeOrigin:true, //
//             pathRewrite:{'/api1':''} //重写请求路径，将/api1替换成空字符串，使得访问的路径从【标识+访问路径】变成【访问路径】
//         })
//     )
// }

// 从 http-proxy-middleware 中解构出 createProxyMiddleware 函数
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        // 使用 createProxyMiddleware 创建代理中间件
        createProxyMiddleware('/api1', {
            target: 'http://localhost:5000', 
            changeOrigin: true, 
            pathRewrite: { '/api1': '' } 
        })
    );
};