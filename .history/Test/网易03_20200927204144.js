function solution(tangCards, wangCards) {
    // write code here
    var tang = tangCards.sort(function (a, b) { return b - a });
    var wang = wangCards.sort(function (a, b) { return b - a });
    var res=0;

    for (let i = 0; i < wang.length; i++) {
        for (let j = 0; j < tang.length; j++) {
            if (tang[j] != -1) {
                if (wang[i] < tang[j]) {
                    res += 6;
                    tang[j] = -1;
                    break;
                } else if (wang[i] == tang[j]) {
                    res += 1
                    tang[j] = -1;
                    break;
                }
            }
        }
    }
    console.log(`tang ${tang}  wang${wang}`);
    return res;
}
console.log(solution([8,7,5],[7,4,9]));