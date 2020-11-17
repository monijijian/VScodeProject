function solution(data) {
    // write code here
    var max = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            let min = 0;
            arr[i] >= arr[j] ? min = data[j] : min = data[i];
            if ((j - i) * min >= max) {
                max = (j - i) * min;
            }
        }
    }
    return max;

}
console.log(solution([1,8,6,2,5,4,8,3,7]));