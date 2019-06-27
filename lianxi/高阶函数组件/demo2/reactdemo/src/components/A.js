import React , { Component }from 'react'

export default (title)=> WrappedComponent => {
    return  class A extends Component {
        render() {
           const {age,...otherProps} = this.props
            return(
                <div>
                   这是A组件{title}
                   <WrappedComponent sex="男" {...otherProps}></WrappedComponent>
                </div>
            )
        }
    }
}