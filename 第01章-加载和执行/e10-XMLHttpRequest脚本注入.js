var xhr = XMLHttpRequest();
xhr.open("get","file1.js",true);
xhr.onreadychannge = function(){
    if (xhr.readyState == 4){
        if (xhr.status >=200 && xhr.status <300 || xhr.status ==304){
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.text = xhr.responseText;
            document.body.appendChild(script)
        }
    }
};
xhr.send(null)

/*
    说明：
    这段代码发送一个GET请求获取file1.js文件。
    事件处理函数onReadyStateChange 检查readyState是否为4，同时检验HTTP状态码是否有效。
    （2xx表示有响应，304意味着是从缓存读取）
    这种方法的主要优点：
    1. 可以下在JavaScript代码但不立即执行。
    由于代码是在script标签之外返回的，因此它下载之后不会立即执行，这使得你可以把脚本的执行过程推迟到你准备好的时候。
    2.同样的代码可以在所有主流浏览器中无一例外都能正常工作
    局限：
    JavaScript文件必须与所请求的页面处于相同的域，这意味着JavaScript不能出CDN下载，因此，大型的web应用通常不会采用
    XHR脚本注入技术。
*/