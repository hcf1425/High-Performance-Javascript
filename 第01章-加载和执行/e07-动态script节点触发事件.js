var script = document.createElement("script")
script.type = "text/javascript"
// FireFox, Opera, Chrome, Safari 3+
script.onload = function(){
    alert("script loaded!")
}
script.src = "file1.js"
document.getElementsByTagName("head")[0].appendChild(script)

/*
    FireFox, Opera, Chrome, Safari 3+ 以上版本会在script元素接收完成时触发一个load事件
    因此可以通过侦听此事件来获得脚本加载完成时的状态。
*/