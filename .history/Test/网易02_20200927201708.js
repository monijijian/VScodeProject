function solution(data) {
    // write code here
    var arr = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            let min = 0;
            arr[i] >= arr[j] ? min = arr[j] : min = arr[i];
            arr.push((j - i) * min);
        }
    }
    arr.sort(function (a, b) { return a - b });
    return arr[arr.length - 1];

}
console.log(solution([1,8,6,2,5,4,8,3,7]));