//引入React核心库
import React from'react';
//引入ReactDOM
// import ReactDOM from'react-dom' 过时的引入方式
import ReactDOM from'react-dom/client';
//引入App组件
import App from './App';

//渲染App到页面
// ReactDOM.render(<App />, document.getElementById('root')) 旧版本已被弃用
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//【组件】与【带有业务逻辑的js】不能都用js结尾，容易区分不开
// 有两种方法来增加辨识度：1、组件后缀改为jsx 2、组件的名称大写