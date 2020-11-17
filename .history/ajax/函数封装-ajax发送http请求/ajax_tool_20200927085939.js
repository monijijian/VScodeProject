
//方法 ： ajax  get五步
function ajax_get(url,data){
    //异步对象
    var ajax = new XMLHttpRequest();

    //url方法
    //如果是GET发送数据 发送的格式为xxx.php?name=jack&age=18
    //所以需要凭借url
    if(data){
        //如果有值，需要拼接字符串
        url+='?'+data;
    }
    ajax.open('get',url,true);
    ajax.send();

    //注册事件
    ajax.onreadystatechange= function(){

        //在事件中  获取数据  并修改界面显示
        if(ajax.readyState==4 && ajax.status==200){
            console.log(ajax.responseText);

        }
    }
}

//方法 ajax post 五步
function ajax_post(url,data){
    //异步对象
    var ajax = new XMLHttpRequest();

    //url方法
    ajax.open('post',url,true);

    //设置 请求报文
    ajax.setRequestHeader()
}
