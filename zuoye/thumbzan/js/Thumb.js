// import PraiseButton from './PraiseButton'

class PraiseButton {
  constructor() {
    this.zanNum=0;
  }

  addZan(){
    return this.zanNum++;
  }

  reduceZan(){
    if (this.zanNum>0) {
      return this.zanNum--;
    }
  }
}


export class Thumb extends  PraiseButton {
  constructor () {
		super();
    this.maxAddNum=100;
  }

  getZanNum(){
    return this.zanNum;
  }
}


console.log(new Thumb().addZan());
