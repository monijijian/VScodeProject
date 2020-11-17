
function foo(str){
    let res;
    res = str.replace(/[a-zA-Z]/g,content =>{
        //content :每一次正则匹配的结果
        //把每个字母大写，看是否有变化，有的话就大写，没变化就小写
        return content.toUpperCase()===content?content.toLowerCase():content.toUpperCase();
    })
    return res;
}

const str = 'aaaBBbnNM';
console.log(foo(str));