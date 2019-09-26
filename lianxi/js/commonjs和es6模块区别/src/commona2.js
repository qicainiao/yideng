var dog = {
    name: 'xsz', // 不要猜测是谁的名字
    owner: ['lc']
};
module.exports = dog;

setTimeout(() => dog.name = 'xushizhou' ,500);
