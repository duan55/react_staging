import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    //获取students数据
    obtainStudentsData = () => {
        axios.get('http://localhost:5000/students').then(
            response => {
                console.log('成功了',response.data);
            },
            error => {
                console.log('失败了',error);
            }
        )
    }

  render() {
    return (
      <div>
        <button onClick={this.obtainStudentsData}>获取students数据</button>
      </div>
    )
  }
}
