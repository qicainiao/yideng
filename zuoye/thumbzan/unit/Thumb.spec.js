import Thumb form "./Thumb"

describe("测试函数基本的API",function(){
    const thumb= new Thumb();
    it("+1函数的应用",function(){
        // expect(new thumb.Thumb().getZanNum()).toBe(0);
         expect(thumb.getZanNum()).toBe(0);
    })
});
