class Car {
  constructor(color,price) {
    this.color = color;
    this.price = price;
  }

  sell(){
    console.log("");
  }
}

class Cruze extends Car{
  constructor(color,price) {
     super(color,price);
  }

  sell(){
       console.log(`将${this.color}的Cruze卖给了小王价格是${this.price}`);
  }
}

let  cruze  = new Cruze("红色","14万");

cruze.sell();
