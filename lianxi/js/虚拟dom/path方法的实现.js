function updateChildren(vnode,newVnode){
     var children = vnode.children || []
     var newChildren = newVnode.children || []
    
     //遍历现有的children
     children.forEach((child,index )=> {
         var newChild = newChildren[index]
         if(newChild == null){
            return
         }

         if(child.tag === newChild.tag){
              updateChildren(child,newChild)
         }else{
             replaceNode(child,newChild)
         }
     });
}


function replaceNode(vnode,newVnode){
    var elem = vnode.elem
    var newElem = createElement(newVnode)
}
