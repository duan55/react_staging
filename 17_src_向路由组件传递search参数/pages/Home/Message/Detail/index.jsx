import React, { Component } from 'react'
import qs from 'qs'

//本来这一步应该是要向服务器询问获取的
const data = [
  { id: '1', content: '憔悴不堪的心 游移不定的眼神' },
  { id: '2', content: '整个世界 独留我孤身一人' },
  { id: '3', content: '只知一味凋零的春日 每年冷漠地附和着我' }
]

export default class Detail extends Component {
  render() {
    console.log(this.props)
    //（1）接收到的params参数被传入到了match对象中的params属性中
    // const {id,title} = this.props.match.params 

    //（2）接收search参数被传入到了location对象中的search属性中（但是其形式非常抽象: '?id=1&title=cry1'）
    const {search} = this.props.location
    const {id, title} = qs.parse(search.slice(1)) // 去掉?号
    // 使用 slice(1) 这个方法来去掉查询字符串开头的问号（?）。因此，如果 search 是 ?id=1&title=cry1，那么 search.slice(1) 会返回 id=1&title=cry1 这样做是为了准备解析成对象
    // const {id, title} = qs.parse(search, {ignoreQueryPrefix: true})

    const findResult = data.find((item) => {
      return item.id === id
    })
    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>content:{findResult.content}</li>
        </ul>
      </div>
    )
  }
}
