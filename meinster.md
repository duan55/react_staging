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