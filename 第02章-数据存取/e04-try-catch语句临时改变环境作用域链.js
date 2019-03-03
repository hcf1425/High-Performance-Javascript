try{
    methodThatMightCauseError();
}catch(ex){
    alert(ex.message); //作用域在此改变。
}
// 请注意，一般catch子句执行完毕，作用域链就会返回到之前的状态。
// 如果使用得当，try-catch是个非常有用的语句。因此不建议完全弃用。


// 尽量简化代码来使得catch子句对性能的影响最小化。
// 一种推荐的做法是将错误委托给一个函数来处理，比如下面的例子。
try {
    methodThatMightCauseError();
} catch (error) {
    handleError(ex); // 委托给错误处理器函数。
}