一、node_modules & public
node_modules存的依赖文件
public中存的基本都是静态资源文件
-favicon.ico 网站图标
-index.html 网站的主页文件 整个项目里面有且仅有一个html 多个功能就对应多个组件 SPA应用(single page application)
-manifest.json 应用加壳时的配置文件
-robots.txt 网站的爬虫协议文件(指定爬虫能够爬取页面的什么信息)

应用加壳，Android-java/IOS-OC|Swift 是不是非常麻烦，不同的环境需要学习不同的开发语言，
但是应用加壳可以在html的基础上加上不同生态系统的壳，就可以生成对应的apk或ipa
-manifest.json 就是配置了应用图标、名字、访问设备的权限(xxx想要yyy的权限)等信息


二、src
其中含有App.css与App.js文件，js组件、css样式文件；注意到在index.html中有root节点，其只会引入一个组件叫做App(因为一个节点会被后续render的组件覆盖，所以只引入一个组件)

App.test.js仅用于测试App组件，该js基本不用

index.css 通用型的样式文件，其甚至可以放到public下，新建一个css文件夹，然后其他文件主动链接到指定的.css文件即可

index.js 入口文件，其会引入App组件，并渲染到root节点上

reportWebVitals.js 用于性能记录

setUpTests.js 进行整体测试的框架的配置文件

三、第一个组件
因此需要进行编辑的文件也就三个
index.html  主页面
App.js      APP组件
index.js    入口文件

如果控制台有warning应该就是18版本，教程是17版本，降版本的话在终端运行 npm install react@17.x react-dom@17.x --save

//【组件】与【带有业务逻辑的js】不能都用js结尾，容易区分不开
// 有两种方法来增加辨识度：1、组件后缀改为jsx 2、组件的名称大写
其中App.js可以不改，它的优先级比较高

src/components/组件名/index.js+index.css

import 组件的时候 如果是js或者jsx就可以省略后缀名，而只需要写入组件名即可
![alt text](./assets/01_image.png)

这种情况下的引入有点麻烦，可以使用index来将引入路径变小
在各个组件文件夹下将主体.jsx命名为index.jsx，然后在引入中就不再需要声明两次组件名，index相关的jsx会被自动import

css模块化：
防止css中的样式被全局污染(命名重复)，可以使用css module；
将index.css文件改名为index.module.css，然后在jsx文件中引入 import style from './index.module.css';
此处引入之后将其内容作为对象存到了style对象中
那之后该组件的样式就能通过style对象来调度，而不会造成全局污染了

ES7+ React/Redux/React-Native snippets的扩展插件安装使用
rcc = react class component
rcf = react functional component

因为public内容相对固定，所以现在可以只独立存储src的内容

四、组件固定结构
public：index.html+favicon.ico
src:
-components(存放各个组件的文件夹)
 App.jsx
 index.js

 *(通用)功能界面的组件化编码流程
 1、拆分组件：拆分界面，抽取组件
 2、实现静态组件：使用组件实现静态页面效果  (先写好样式，不考虑动态的输入 交互等内容)
 3、实现动态组件：
  3.1动态显示初始化数据
   3.1.1数据类型
   3.1.2数据名称
   3.1.3保存在哪个组件？
  3.2交互(从绑定事件监听开始)


  结构与样式：
  推荐做法是首先将结构丢入到App.jsx中查看框架的合理度，那之后再导入样式，查看是否与原型图或者预期相近，最后再将功能的细节划分到各个组件中

  现在一个父组件中的两个兄弟组件通信需要使用消息订阅与发布，但是没有学习，于是曲线救国去控制父组件的state状态

  组件间通信：
  现在需要将Header的值传递给App，更新其todos从而使得List中的Item  得到更新
  子组件想要给父组件传值，需要父组件给子组件一个回调函数，然后在子组件的事件中调用该回调函数，将值传给父组件

  id使用uuid生成 或者 小号版本 nanoid
  npm i nanoid
  npm i uuid
  import {nanoid} from 'nanoid' 那之后每次使用nanoid都会给一个全球唯一的id

  p58
  逻辑：
  App中的state会给到List中使用，而Header需要将用户输入的值给到List中；
  由于目前尚未知晓子组件之间通信的方式，
  现在让父组件App传递回调函数到子组件Header中，Header使用回调函数更新App中的state，
  App状态更新就需要重新调用render，而List是App的子组件，所以List的render函数也会被调用

  p59
  20250122 关于鼠标移动与背景高亮的实践
  state = {mouse:false}
  handleMouse = (isEnter) => {
    return () => {
      //返回值不写成函数的话，打开页面时就会触发那些事件函数
      this.setState({mouse:isEnter})  
    }
  }
  框的高亮显示
  <li style={{backgroundColor:this.state.mouse?'#ddd':'#fff'}} 灰&白
  onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
  删除按钮的显示
  <button style={{ display: mouse? 'block' : 'none' }}>删除</button>

  p60
  状态在哪里，操作状态的方法就在哪里
  哪怕触发函数的组件是孙组件，也要在对应的真实爷组件中声明回调函数，再自上而下逐级传递到孙组件

  p61
  npm i prop-types
  对传递的props进行类型检查，防止传入错误的类型
  import PropTypes from 'prop-types';
  static propTypes = {
    //限制{addTodo}为一个[必传]的[函数]
    addTodo: PropTypes.func.isRequired
  }

  p62
  如果不想使用柯里化或者高阶函数 可以在这里直接使用箭头函数，使得其直接返回一个函数 而不需要再在回调函数声明的时候再进行函数的返回
  函数的声明要避开关键字 如delete
  let x ={aa:1,bb:2} delete x.aa
  if(confirm('确认删除该条记录吗？')){
      this.props.deleteTodo(id)
  }

  p63 
  Footer组件
  reduce用于数组计数统计：条件统计、条件求和、筛选最值  
  defaultChecked只在页面第一次渲染的时候进行一次生效，那之后需要使用onChange来切换对应checkbox或者说其他组件的状态
  也就是说一般情况下都会使用checked来保证可以通过其他的状态决定来【被动】切换checkbox状态，但也要有不通过其他状态的场合下使用onChange来【直接】切换

  p64
  todoList案例相关知识点
  1.拆分组件、实现静态组件，注意:className、style的写法
  2.动态初始化列表，如何确定将数据放在哪个组件的state中？
  -某个组件使用：放在其自身的state中
  -某些组件使用：放在他们共同的父组件state中(官方称此操作为：状态提升)
  3.关于父子之间通信：
  -1.【父组件】给【子组件】传递数据：通过props传递
  -2.【子组件】给【父组件】传递数据：通过props传递，要求父组件给子组件提供一个函数(类似于重写继承)
  4.注意defaultChecked 和 checked 的区别，类似的还有：defaultValue、value
  5.状态在哪里，操作状态的方法就在哪里？

  五、react ajax
  1.前置说明
  1)React本身只关注于界面，并不包含发送ajax请求的代码
  2)前端应用需要通过ajax请求与后台进行交互(json数据)
  3)react应用中需求集成第三方ajax库(或自己封装) -> 自己封装的请学习【sgg:ajax请求课程】，一般情况下不会自己封装(耗时且不完善)<-造轮子
  
  2.常用的ajax请求库
  1)JQuery：比较重，如果需要另外引入，不建议；
  因为使用react就需要尽可能减少自己去操作dom，只需要改数据更新状态让react去转化为虚拟dom转化真实dom渲染在页面
  而JQuery就是专门操作dom的库，所以不建议使用
  2)axios：轻量级，功能丰富，使用起来也比较方便，推荐使用
  a.封装XmlHttpRequest请求对象的ajax
  b.promise风格
  c.可以用在浏览器端和node服务器端

  npm i axios
  node server1.js

  3.跨域问题
  跨域问题 localhost3000(client)与5000(server)的通信
  产生跨域本质问题是ajax引擎把响应拦截了，而中间的代理服务器(端口与client一致)是通过请求转发(没有ajax引擎，同源策略不会限制它)，获取到值之后再给到client

  4.react中的代理模式
  4.1配置代理解决跨域
  package.json中配置proxy字段：
  "proxy": "http://localhost:5000"
在client端通过axios请求http://localhost:3000/api/xxx，会去先检索本机/api/xxx是否存在，不存在则会请求http://localhost:5000/api/xxxserver端的接口
但是这样比较死板，想一下微服务这种情况，似乎不够灵活

// ,"proxy": "http://localhost:5000" 现在会报错：
  npm start

> react_staging@0.1.0 start
> react-scripts start

Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
 - options.allowedHosts[0] should be a non-empty string.

//换成这个又不生效
 ,
  "options": {
    "allowedHosts":["localhost",".localhost"],
    "proxy":"http://localhost:5000"
  }

p66
多个网络配置proxy 代理就不太行了
在src中新建一个setupProxy.js文件(名称不可修改)，不可以用ES6的语法，只能用CJS(commonjs)的语法，其并非给前端代码执行，react脚手架会找到该文件并将其加到webpack的配置中，webpack中都是node的语法->都是CJS的语法

在src/setupProxy.js中写入以下内容：
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
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: { '/api2': '' }
        })
    );
};

p67
成型的样式库最好放到public/css中;并在index.html中引入<link rel="stylesheet" href="./css/bootstrap.css">
组件拆分的时候，如果对css进行组件拆分，则需要对审查元素进行查看来分解样式