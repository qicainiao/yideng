import React from 'react'
const modifyPropsHOC= (WrappedComponent) =>  class NewComponent extends WrappedComponent{
    static displayNme =  `NewComponent(${getDisplayName(WrappedComponent)})`
   
    componentWillMount(){
        alert("我的修改后的生命周期");
    }
    render() {
        console.log("displayNme",getDisplayName(WrappedComponent))
       const element = super.render();
       const newStyle = {
        color: element.type == 'div'?'red':'green'
       }
       const newProps = {...this.props,style:newStyle}
       return React.cloneElement(element,newProps,element.props.children)
    }
}

function getDisplayName(WrappedComponent){
  return  WrappedComponent.displayNme || WrappedComponent.name || 'Component'
}

export default modifyPropsHOC