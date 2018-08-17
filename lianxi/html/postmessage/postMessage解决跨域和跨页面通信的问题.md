html5: postMessage解决跨域和跨页面通信的问题
平时做web开发的时候关于消息传递，除了客户端与服务器传值，还有几个经常会遇到的问题：

多窗口之间消息传递(newWin = window.open(..));
页面与嵌套的iframe消息传递
postMessage方法
postMessage是html5引入的API可以更方便、有效、安全的解决这些问题。postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递。

postMessage(data,origin)方法接受两个参数
data:要传递的数据，
html5规范中提到该参数可以是JavaScript的任意基本类型或可复制的对象，然而并不是所有浏览器都做到了这点儿，部分浏览器只能处理字符串参数，所以我们在传递参数的时候需要使用JSON.stringify()方法对对象参数序列化，在低版本IE中引用json2.js可以实现类似效果。

origin：字符串参数，指明目标窗口的源，
协议+主机+端口号[+URL]，URL会被忽略，所以可以不写，这个参数是为了安全考虑，someWindow.postMessage()方法只会在someWindow所在的源(url的protocol, host, port)和指定源一致时才会成功触发message event，当然如果愿意也可以将参数设置为"*"，someWindow可以在任意源，如果要指定和当前窗口同源的话设置为"/"。

MessageEvent的属性
data：顾名思义，是传递来的message
source：发送消息的窗口对象
origin：发送消息窗口的源（协议+主机+端口号）
示例:
同域父子页面间通讯
父页面a.html:

//> localhost:9011/a.html
<h1 class="header">page A</h1>
<div class="mb20">
    <textarea name="ta" id="data" cols="30" rows="5">hello world</textarea>
    <button style="font-size:20px;" onclick="send()">post message</button>
</div>
<!-- 不跨域的情况 -->
<iframe src="b.html" id="child" style="display: block; border: 1px dashed #ccc; height: 300px;"></iframe>

<script>
function send() {
    var data = document.querySelector('#data').value;

    // 注意: 只会触发当前window对象的message事件
    // 也可以访问子页面的window对象，触发子页面的message事件 (window.frames[0].postMessage(...))
    // window.postMessage(data, '/');
   // data = {name: 'sandy', age: 20, fav: {sing: true, shop: false}}; // 也可以传普通对象
    window.frames[0].postMessage(data, '/'); // 触发同域子页面的message事件
    //window.frames[0].postMessage(data, 'http://localhost:9022/'); // 触发跨域子页面的messag事件
}

// 当前页面执行 window.postMessage(..)
// 或
// 子页面执行 parent.postMessage(...) 都会触发下面的回调, messageEvent.source不同而已
window.addEventListener('message', function(messageEvent) {
    var data = messageEvent.data;// messageEvent: {source, currentTarget, data}
    console.info('message from child:', data);
}, false);
</script>
子页面b.html

//> localhost:9011/b.html
<h1 class="header">page B</h1>

<input type="text" id="inp" value="some contents..">
<button onclick="send()">send</button>

<script>
window.addEventListener('message', function(ev) {
    // if (ev.source !== window.parent) {return;}
    var data = ev.data;
    console.info('message from parent:', data);
}, false);

function send() {
    var data = document.querySelector('#inp').value;
    // window.postMessage(data, '*'); // 触发当前页面的message事件
    parent.postMessage(data, '*'); // 触发父页面的message事件
    // parent.postMessage(data, 'http://localhost:9011/'); // 若父页面的域名和指定的不一致，则postMessage失败
}
</script>
跨域父子页面间通讯
父页面a.html:

//> localhost:9011/a.html
<h1 class="header">page A</h1>
<div class="mb20">
    <textarea name="ta" id="data" cols="30" rows="5">hello world</textarea>
    <button style="font-size:20px;" onclick="send()">post message</button>
</div>
<!-- 跨域的情况 -->
<iframe src="http://localhost:9022/b.html" id="child" style="display: block; border: 1px dashed #ccc; height: 300px;"></iframe>

<script>
function send() {
    var data = document.querySelector('#data').value;

    window.frames[0].postMessage(data, 'http://localhost:9022/'); // 触发跨域子页面的messag事件
}

window.addEventListener('message', function(messageEvent) {
    var data = messageEvent.data;
    console.info('message from child:', data);
}, false);
</script>
子页面b.html

//> localhost:9022/b.html
<h1 class="header">page B</h1>

<input type="text" id="inp" value="some contents..">
<button onclick="send()">send</button>

<script>
window.addEventListener('message', function(ev) {
    // if (ev.source !== window.parent) {return;}
    var data = ev.data;
    console.info('message from parent:', data);
}, false);

function send() {
    var data = document.querySelector('#inp').value;
    parent.postMessage(data, 'http://localhost:9011/'); // 若父页面的域名和指定的不一致，则postMessage失败
    // parent.postMessage(data, '*'); // 触发父页面的message事件
}
</script>
