import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Child from './child'

 class Tabbar extends Component {
   
      // 在父组件中 定义上下文类型
      static childContextType = {
        router: PropTypes.object
    }
    
    
  constructor (props, context) { // 加上context参数
    super(props, context); // 加上context
  }


// 在父组件中 给context填充数据
getChildContext() {
    return { // 返回context对象
      router: this.props.history
    }
}

  render() {
    console.log("Tabbar===============>",this)
    console.log("Tabbar===============>",this.context)
    return (
      <div className="tabbar">
        Tabbar
        <Child ></Child>
      </div>
    )
  }
}

Tabbar.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Tabbar
