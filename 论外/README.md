###### 前置

学习webpack

###### 步骤

脚手架

安装

npm install -g create-react-app

cd des+tab => cd Desktop 到这个常用界面启动项目

dir cls



因为老旧版本的下载方式已经过时

而我的版本又不兼容

npx create-react-app react_staging --skip-install

那之后到`package.json` 文件编辑修改版本，

```json
{
  "name": "react_staging",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.5.0",
    "web-vitals": "^2.1.4",
    "ajv": "^8.12.0",
    "ajv-keywords": "^5.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

