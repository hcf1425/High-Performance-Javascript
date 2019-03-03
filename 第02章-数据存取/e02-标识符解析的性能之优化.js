function init(){
    var doc = document,  // 将全局变量存储在局部变量中。
        bd = doc.body,
        links = doc.getElementsByTagName("a"),
        i = 0,
        len = links.length;

    while (i<len){
        update(links[i++]);
    }
    doc.getElementById("go-btn").onclick = function(){
        start();
    }
    bd.className = "active";
}

// 访问全局变量的次数由3次减少到了1次。
