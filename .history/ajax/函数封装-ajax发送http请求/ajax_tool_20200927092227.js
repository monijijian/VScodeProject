
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
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //发送
    if(data){
        //如果有值  post请求  send 发送给服务器
        ajax.send(data);
    }else{
        ajax.send();
    }

    //注册事件
    ajax.onreadystatechange = function(){
        //在事件中  获取数据  修改界面显示
        if(ajax.readyState==2 && ajax.status==200){
            console.log(ajax.responseText);
        }
    }
}


//方法：将get和post 封装到一起
/*
    参数一：url
    参数二：数据
    参数三：请求的方法
    参数四：数据成功获取后， 调用的方法
*/
function ajax_tool(url,data,method,success){
    //异步对象
    var ajax = new XMLHttpRequest();

    //判断 GET POST   写不同的代码
    if(method == 'get'){
        //GET请求
        if(data){
            url+='?'+data;
        }
        //设置方法 url
        ajax.open(method,url,true);

        //发送即可
        ajax.send();
    }else{
        //post请求  url无需改变
        ajax.open(method,url,true);

        //需要设置报文
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        //判断data  send发送数据
        ajax.onreadystatechange = function(){
            //在事件中 获取数据 改变界面显示
            if(ajax.readyState==4 && ajax.status==200){
                //将  数据  让  外面可以使用
                //return ajax.responseText;

                //数据成功获取后，执行success()
                //版获取的数据作为success()的参数，如此数据就相当于变相传递到外面去了
                success(ajax.responseText);
            }
        }
    }
}