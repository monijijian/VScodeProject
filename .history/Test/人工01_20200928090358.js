function monkey(mon,box,ban){
    console.log(`初始位置：猴子${mon}  , 箱子${box}  ，香蕉${ban}`);
    let getbox = false;
    let num = 0;//猴子走的步数
    while(!getbox){
        if(mon>box){
            mon--;
            num++;
        }else if(mon<box){
            mon++;
            num++;
        }else{
            getbox=true;
        }
        console.log(`第${num}步：猴子走到${mon}`)
    }
    console.log('猴子找到箱子了！！')

    let getban = false;
    while(!getban){
        if (mon > ban) {
            mon--;
            num++;
        } else if (mon < ban) {
            mon++;
            num++;
        } else {
            getbox = true;
        }
        console.log(`第${num}步：猴子带着箱子走到${mon}`)
    }
    console.log('猴子爬上箱子吃到香蕉！！！')
}

monkey(10,1,9);