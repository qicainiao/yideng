import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'

class TodoList extends Component {
   constructor(props){
     super(props);
     this.state={
         inputValue:'',
         list:[]
     }
   }

   handleInputChange=(e)=>{
     console.log(this.input_li.value)
   }

   render(){
       const {title}= this.props
       return(
           <Fragment>
              <div>
              <h1>{title}</h1>
                <label htmlFor='insertArea'>输入内容</label>
                <input
                  id="insertArea"
                  ref={(c) => {this.input_li = c } }
                  onChange={this.handleInputChange}
                 />
              </div>
              <ul>
                <li dangerouslySetInnerHTML={{__html:'<h1>555</h1>'}}></li>
              </ul>
           </Fragment>
       )
   }

}

TodoList.propTypes ={
  title:PropTypes.string.isRequired
}

TodoList.defaultProps={
  title:'Hello World'
}
export default TodoList;

