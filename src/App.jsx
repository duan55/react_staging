import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  //获取students数据
  obtainStudentsData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => {
        console.log('成功了', response.data);
      },
      error => {
        console.log('失败了', error);
      }
    )
  }
  
  //获取cars数据
  obtainCarsData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      response => {
        console.log('成功了', response.data);
      },
      error => {
        console.log('失败了', error);
      }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.obtainStudentsData}>获取students数据</button>
        <button onClick={this.obtainCarsData}>获取cars数据</button>
      </div>
    )
  }
}
