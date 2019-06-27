import React, {Component} from 'react'
import D from './D'
class E extends Component {
    constructor(){
        super()
        this.objRef = React.createRef()
    }
    componentDidMount(){
        setTimeout(()=>{
           this.refs.stringRef.textContent = "string ref got"
           this.methodRef.textContent = 'method ref got'
           this.objRef.current.textContent = "obj ref got" 
        },1000)
    }
    render(){
        return (
          <div>
              <p ref="stringRef">span1</p>
              <p ref={ele => (this.methodRef = ele)}>span2</p>
              <p ref={this.objRef}>span3</p>
              我的div
          </div>
        );
    }
}

export default D(E)