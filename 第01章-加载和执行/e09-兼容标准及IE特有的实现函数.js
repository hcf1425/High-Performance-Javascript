// 在大多数情况下，你需要使用单一的方法来动态加载JavaScript文件，下面的函数封装了标准及IE特有的实现方法。
function loadScript(url, callback){
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){ //IE
        script.onreadychange = function(){
            if (script.readystate == "loaded" || script.readyState == "complete"){
                script.readystatechange = null;
                callback()
            }
        }
    }else{ // 其他浏览器
        script.onload = function(){
            callback();
        };
    }
    script.src = null;
    document.getElementsByTagName("head")[0].appendChild(script)
}