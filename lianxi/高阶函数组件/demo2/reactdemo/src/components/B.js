import React , { Component }from 'react'
import A from './A.js'

class B extends Component{
    render() {
        return(
            <div>
               性别：{this.props.sex}
               年龄：{this.props.age}
               姓名：{this.props.name}
            </div>
        )
    }
}

export default  A('提示')(B)