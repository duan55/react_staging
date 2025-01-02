// 联动module.js

// import React from "./module.js";
// console.log(React); 
// const {Component} = React;
// console.log(new Component());

//上面的写法可以获取到Component，但是下面不行，这是因为ES6中import里直接{}并非解构赋值，而是导入单独暴露的属性
// import React, { Component } from "./module.js";
// console.log(React);
// console.log(new Component());