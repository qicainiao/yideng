class PraiseButton {
  constructor(num,element) {
    this.num= num;
    this.element = element;
  }

  clickAction(){
    this.element.click(()=>{
      if (this.num<10) {
        
      }
    })
  }
}
