function cal(str){
    console.log('length: '+ str.length);
    let num1 = -1,num2 =-1,res = 0;
    let cur = '' , bol = '+';
    let flag =true;

    for(let i =1;i<str.length;i++){
        
        
        switch(str[i]){
            case '零':
                cur +=0;
                break;
            case '壹':
                cur += 1;
                break;
            case '贰':
                cur += 2;
                break;
            case '叁':
                cur += 3;
                break;
            case '肆':
                cur += 4;
                break;
            case '伍':
                cur += 5;
                break;
            case '陆':
                cur += 6;
                break;
            case '柒':
                cur += 7;
                break;
            case '捌':
                cur += 8;
                break;
            case '玖':
                cur += 9;
                break;
            case '拾':
                cur = parseInt(cur)*10;
                break;

            case '加':
                if(flag){
                    res = parseInt(cur);
                    flag = false;
                    bol = '+';
                    cur = '';
                }else{
                    if(bol = '+'){
                        res += parseInt(cur);
                    }else{
                        res -= parseInt(cur);
                    }
                    bol = '+';
                    cur = '';
                }
                break;
            case '减':
                if (flag) {
                    res = parseInt(cur);
                    flag = false;
                    bol = '-';
                    cur =''
                } else {
                    if (bol = '+') {
                        res += parseInt(cur);
                    } else {
                        res -= parseInt(cur);
                    }
                    bol = '-';
                    cur = '';
                }
                break;
        }
        if (i == str.length - 1) {
            if(num1==-1 && num2 ==-1){
                if (bol == '+') {
                    console.log(`res ${res} pcur ${parseInt(cur)}`)
                    res += parseInt(cur);
                } else {
                    res -= parseInt(cur);
                }
            }else{
                res += num1 + parseInt(cur);
            }
            cur = '';
        }
        console.log(`str[${i}] ${str[i]}  bol  ${bol}  res: ${res} cur${cur}`)
    }

    return res;
}
console.log(cal('"玖拾玖加捌拾捌减柒拾柒加壹拾减壹拾陆加零"'));