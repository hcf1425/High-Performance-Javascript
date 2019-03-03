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

loadScript("file1.js",function(){
    loadScript("file2.js",function(){
        loadScript("file3.js",function(){
            alert("all files are loaded!")
        })
    })
})

/*
    保证文件顺序加载
    这段代码会先加载file1.js，等待file1.js加载完了之后再加载file2.js,以此类推，最后加载file3.js。
    虽然方案可行，但是如果需要下载的文件较多，这个方案会带来一点管理上的麻烦
    如果多个文件下载的顺序很重要，更好的做法是把他们按照正确的顺序合并成一个文件。
*/