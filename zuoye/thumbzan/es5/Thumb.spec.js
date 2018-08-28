var thumb = require ("./Thumb.js")

console.log("thumb.getZanNum()==>",new thumb.Thumb().getZanNum());
describe("测试函数基本的API",function(){
    it("+1函数的应用",function(){
        expect(new thumb.Thumb().getZanNum()).toBe(0);
    })
});
