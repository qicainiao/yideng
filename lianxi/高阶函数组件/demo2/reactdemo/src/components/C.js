import React,{component} from 'react'
import A from './A'

export default class C extends component{
    render() {
        return(
            <div>
  
               这是C组件
            </div>
        )
    }
}

A(C)