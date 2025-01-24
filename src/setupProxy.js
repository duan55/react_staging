//ES6语法import，CJS语法为require
const { createProxyMiddleware } = require('http-proxy-middleware');// 按住ctrl这个东西变蓝，是因为这个'http代理中间件'在脚手架初始化的时候就被引入了

module.exports = function(app) {
    //app.use可以传多个入参
    app.use(
        // 使用 createProxyMiddleware 创建代理中间件
        createProxyMiddleware('/api1', {//遇见'/api1'前缀的请求，就会触发该代理配置
            target: 'http://localhost:5000', //转发的目标地址
            changeOrigin: true, //控制服务器收到的请求头中HOST字段的值，如果不设置服务器得到的host是localhost:3000，加了变为5000，有时候对方服务器对host有限制时，最好设置为true，所以一般情况下都设置为true
            pathRewrite: { '/api1': '' }  //重写请求路径，将/api1替换成空字符串，使得访问的路径从【标识+访问路径】变成【访问路径】
        })
    );
};