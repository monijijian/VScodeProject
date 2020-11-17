// 处理输入
// let input = '', line;
// while ((line = read_line()) != '') {
//     input += line;
// }

let input = [2,3,1,1,4];
// 处理输出
const result = Solution(input);
//print(result);
console.log(result);

// 算法部分
function Solution(input) {
    let frist = input[0];
    let num=0;

    if(frist == 0){
        return Infinity;
    }

    let flag = 0;

    for(var i =flag;i<input.length;i++){


        if(i != input.length-1){

            var max = input[i + 1]-(input[i]-1);
        }

        let flag1 =flag;

        for(var j =i+1;j<=i+input[i];j++){
            if(input[j]-( i-1) >= max){
                max = input[j]-(input[i]-1);
                flag = j;
               // console.log('flag: '+flag + 'max :'+max);
            }
        }
        //console.log('i:'+i);
        if(flag1 != flag){
            num++;
        }
    }
    return num;
}