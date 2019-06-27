function createElement(vnode){
   var tag= vnode.tag
   var attrs = vnode.attrs||{}
   var children = vnode.children || []
   if(!tag){
       return null
   }

   var elem = document.createElement(tag)

    var attrName 
    for(attrName in attrs){
    if(attrs.hasOwnProperty(attrName)){
        elem.setAttribute(attrName,attrs[attrName])
      }
    }

    children.forEach(childNode => {
        elem.appendChild(createElement(childNode))
    });

    //返回真实的Dom

    return elem

}



