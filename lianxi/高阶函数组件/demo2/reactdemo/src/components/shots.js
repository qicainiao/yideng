import React, {Component} from 'react'
import all from 'js_screen_shots'

import './shots.css';
class Shots extends Component {
    constructor(props) {
        super(props)
        this.state ={
            tittle:'原始HTML',
            canvasWidth:'',
            canvasHeight:'',
            imgParmas:{
                imgWidth:'',
                imgHeight:'',
                filename:'',
                type:'png'
            },
            canvas:''
        }
    }


    handleTocanvas=()=>{
        let _this = this
      console.log("handleTocanvashandleTocanvashandleTocanvas",this.mainRef,this.canvasPosRef )
      const {html2canvas} = all;
      // 调用html2canvas插件
    html2canvas(test,{useCORS:true,foreignObjectRenderign:true,allowTaint:false}).then(function(canvas) {
        // canvas
        console.log("canvascanvascanvas",canvas)
        _this.setState({
            // canvas宽高度
            canvas,
            canvasWidth : canvas.width,
            canvasHeight : canvas.height,
            tittle:'这是canvas元素'
        })
           // 渲染canvas
        _this.canvasPosRef.appendChild(canvas);
      
      });
    }

    handleToImage=()=>{
        console.log("handleToImagehandleToImagehandleToImage")
        const {Canvas2Image} = all;
          // 调用Canvas2Image插件
          const {canvas,canvasWidth,canvasHeight} = this.state
          let img=Canvas2Image.convertToImage(canvas,canvasWidth,canvasHeight);
          // 渲染图片
          this.imgPosRef.appendChild(img);
          let _this = this
          _this.setState({
            tittle:'这是img元素'
        })
    }

    save=()=>{
        const {imgParmas,canvasWidth,canvasHeight,canvas} = this.state
        console.log(this.imgParmas);
        const {Canvas2Image} = all;
        // 点击保存
        let type = imgParmas.type; //图片类型
        let w = (imgParmas.imgWidth?imgParmas.imgWidth:canvasWidth).toString(); //图片宽度
        let h = (imgParmas.imgHeight?imgParmas.imgHeight:canvasHeight).toString(); //图片高度
        let f = (imgParmas.filename?imgParmas.filename:(new Date()).getTime()).toString(); //图片文件名
        // 调用Canvas2Image插件
        console.log(type);
        console.log(w);
        console.log(h);
        console.log(f);
        Canvas2Image.saveAsImage(canvas, w, h, type, f);
      }

    render(){
        const {title} = this.state
        console.log(all);
        return (
           <div className="content">
                 <div id="main" ref={ele => (this.mainRef = ele)}  className="main">
                    <div  ref={ele => (this.testRef = ele)} style={{background:'red',width: '600px'}} id="test" v-show="htmldom" className="borderSet">
                     <div style={{background:'green'}} className="borderSet">
                       <div style={{background:'blue'}} className="borderSet">
                          88888888
                       </div>
                     </div>
                    </div>
                 </div>
                 <div className="canvasPos" ref={ele => (this.canvasPosRef = ele)} >
                 </div>
                 <div className="imgPos" ref={ele => (this.imgPosRef = ele)}></div>
                <button onClick={this.handleTocanvas}>转Canvas</button>
                <button onClick={this.handleToImage}>转图片</button>
                <button onClick={this.save}>保存图片</button>
                
              </div>
        );
    }
}

export default Shots