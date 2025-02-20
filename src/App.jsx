import React, { Component } from 'react'
import { Button, DatePicker, Flex } from 'antd';
import { WechatOutlined, WeiboOutlined, TwitterOutlined, YoutubeOutlined, SearchOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;

export default class App extends Component {

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div>
        <h2>ant-design</h2>

        <Button type="primary">我是一个按钮</Button>
        <Button>默认按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button type="text">文本按钮</Button>
        <Button type="link">链接按钮</Button>
        <Button type="primary" icon={<SearchOutlined />}>
          带搜索框图标的按钮
        </Button>
        <br />
        <WechatOutlined />
        <WeiboOutlined />
        <TwitterOutlined />
        <YoutubeOutlined />
        <br />
        <DatePicker onChange={this.onChange} />
        <RangePicker/>

        {/* <Flex gap="small" wrap>
          <Button type="primary">我是一个按钮</Button>
          <Button>默认按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="text">文本按钮</Button>
          <Button type="link">链接按钮</Button>
        </Flex> */}
      </div>
    )
  }
}
