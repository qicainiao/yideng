import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

 class Child extends Component {
    //利用静态属性contextTypes 获取到要用属性
    static contextTypes = {
      router: PropTypes.string
  }
  constructor (props, context) { // 加上context参数
    super(props, context); // 加上context
  }
  render() {
    console.log(this)
    console.log(this.context)
    return (
      <div className="tabbar" onClick={()=>console.log(this)}>
        Child
      </div>
    )
  }
}


export default Child
