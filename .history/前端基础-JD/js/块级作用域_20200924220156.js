/*
在大多数语言中都存在块级作用域的概念，{}花括号就是一个块级作用域的范围
public void foo (){
    int i =1;
    if(i == 1){
        int j = 3;
    }
    return j = 3;
}
如上的java代码，运行会报错，因为j是在if语句块中定义的，作用域也仅限if语句中，在外面调用不了

*/

function foo (){
    var i =1;
    if(i ==1){
        var j = 3;
    }
    console.log(j);
}
foo();
//而这段js代码却可以输入定义在if语句中定义的j
function foo1() {
    var i = 1;
    if (i == 1) {
        let j = 3;
    }
    console.log(j);
}
foo1();