function initUI(){
    with (document){ // 避免！！
        var bd=body,
        links = getElementByTagName("a")
        i = 0,
        len = links.length;

    while (i<len){
        update(links[i++]);
    }
    getElementById("go-btn").onclick = function(){
        start();
    }
    bd.className = "active";
    }
}

// 重写initUI使用with语句来避免多次书写document，看上去很高效，实际上产生了一个性能问题。
/*
    当代码执行到with语句，执行环境的作用域临时被改变了。一个新的变量对象被创建，它包含了参数指定对象的所有属性。
    这个对象被推入作用域链的首位，这意味着函数的所有局部变量现在处于第二个作用域链中，因此访问的代价更高了。
    使得访问document对象的属性操作非常快，而访问局部变量则变慢了。
    因此，最好避免使用with语句。
*/