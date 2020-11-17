function cal(str){
    console.log('length: '+ str.length);
    let num1 = -1,num2 =-1,res = 0;
    let cur = '' , bol = '+';

    for(let i =0;i<str.length;i++){
        
        
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
            case '加':
                if(num1 == -1){
                    num1 = parseInt(cur);
                    bol = '+';
                }else if (num2 ==-1){
                    num2 = parseInt(cur);
                    bol = '+'
                }else if(bol == '+'){
                    res += num1 + num2;
                    num1 = -1;
                    num2 = -1;
                    bol = '+';
                }else{
                    res += num1 - num2;
                    num1 = -1;
                    num2 = -1;
                    bol = '+';
                }
                break;
            case '减':
                if (num1 == -1) {
                    num1 = parseInt(cur);
                    cur ='';
                    bol = '-';
                } else if (num2 == -1) {
                    num2 = parseInt(cur);
                    cur = '';
                    if (bol == '+') {
                        res += num1 + num2;
                        num1 = -1;
                        num2 = -1;
                    } else {
                        res += num1 - num2;
                        num1 = -1;
                        num2 = -1;
                    }
                    bol = '-'
                } 
                break;
        }
        if (i == str.length - 1) {
            if (bol == '+') {
                res += parseInt(cur);
                console.log(res);
            } else {
                res -= parseInt(cur);
            }
            cur = '';
        }
        console.log(`num1: ${num1} num2 : ${num2} res: ${res} cur${cur}`)
    }

    return res;
}
console.log(cal('壹加壹'));