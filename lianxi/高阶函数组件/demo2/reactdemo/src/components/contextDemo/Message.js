import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThreadList from './ThreadList.js'

class Message extends Component {
    static propTypes = {
       users: PropTypes.array.isRequired,
       initialActiveChatIdx: PropTypes.number,
       messages: PropTypes.array.isRequired
    }

    // 在父组件中 定义上下文类型
    static childContextType = {
        users: PropTypes.array,
        userMap: PropTypes.object
    }

    // 在父组件中 给context填充数据
    getChildContext() {
        return { // 返回context对象
            users: this.getUsers(),
            userMap: this.getUserMap()
        }
    }

    getUsers = () => {
        // ... 获取数据
        return ["a","ss"]
    }

    getUserMap = () => {
        // ... 获取数据
    }

    render() {
        console.log("qqqqqqqqqqq=============>",this)
       return (
           <div>
                <ThreadList />
               
           </div>
       )
    }
}

export default Message
