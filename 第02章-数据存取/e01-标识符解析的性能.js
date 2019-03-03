function init(){
    var bd = document.body,
        links = document.getElementsByTagName("a"),
        i = 0,
        len = links.length;

    while (i<len){
        update(links[i++]);
    }
    document.getElementById("go-btn").onclick = function(){
        start();
    }
    bd.className = "active";
}

/*
    该函数引用了三次document，而document是个全局对象，搜索该变量的过程必须遍历整个作用域链，直到最后在全局变量中找到。
    可以通过先将全局变量的引用存储在一个局部变量中，然后使用这个局部变量代替全局变量。
*/