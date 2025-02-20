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

p96
在自定义主题中，修改全局的样式；在5.x版本中已经弃用了less，改用了css-in-js；现在好像要使用ConfigProvider来进行主题定制了，具体方法可以参考官方文档(搜其他B站教程)
https://ant.design/docs/react/migrate-less-variables-cn

写了一个DiyColor.jsx函数式组件
另外使用了：
 <ConfigProvider>包裹住需要修改主题颜色的组件并在其标签属性声明对应的更改即可，eg:

 render() {
    return (

      <ConfigProvider
        theme={{
          components: {
            Button: {
              primaryColor: 'pink', // 字体色
              colorPrimary: 'green', // 按钮内背景色
              defaultColor: 'red', // ...
            },
          },
        }}
      >

        <div>
          <h2>ant-design</h2>
          <Button type="primary">我是一个按钮</Button>
          <Button>默认按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="text">文本按钮</Button>
          <Button type="link">链接按钮</Button>
          <Button type="primary" icon={<SearchOutlined />}>带搜索框图标的按钮</Button>
          <br />
          <WechatOutlined />
          <WeiboOutlined />
          <TwitterOutlined />
          <YoutubeOutlined />
          <br />
          <DatePicker onChange={this.onChange} />
          <RangePicker />
        </div>

      </ConfigProvider>

    )
  }