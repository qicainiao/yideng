import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class ThreadList extends Component {
    // 为了在子组件中抓取context, 我们需要告诉React我们想要访问context
    // 我们通过在子组件中定义 contextTypes 和 React交流
    static contextTypes = {
        users: PropTypes.array
    }

    render() {
        console.log(this)
        return (
            <div >
                <ul >
                    aa
                </ul>
            </div>
        )
    }
}


export default ThreadList

