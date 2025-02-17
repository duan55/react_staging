import React, { Component } from 'react'

//本来这一步应该是要向服务器询问获取的
const data = [
    {id:'1',content:'憔悴不堪的心 游移不定的眼神'},
    {id:'2',content:'整个世界 独留我孤身一人'},
    {id:'3',content:'只知一味凋零的春日 每年冷漠地附和着我'}
]

export default class Detail extends Component {
  render() {
    console.log(this.props)
    //接收到的params参数被传入到了match对象中params属性中
    const {targetId,targetTitle} = this.props.match.params
    const findResult = data.find((item)=>{
        return item.id === targetId
    })
    return (
      <div>
        <ul>
            <li>id:{targetId}</li>
            <li>title:{targetTitle}</li>
            <li>content:{findResult.content}</li>
        </ul>
      </div>
    )
  }
}
