function MoreThanHalfNum_Solution(numbers) {
    // write code here
    let arr = [];
    let num = {};
    for (let i of numbers) {
        let bol = true;
        for (let j of arr) {
            if (i == j) {
                bol = false;
            }
        }
        console.log(bol);
        if (bol) {
            arr.push[i];
            num[i] = 1;
        } else {
            console.log('fafdsdsf');
            num[i]++;
        }
    }
    let res = false;
    let temp = 0;
    let len = Math.floor(numbers.length / 2);
    for (let i of arr) {
        if (num[i] > len) {
            res = true;
            temp = i;
        }
    }
    if (res) {
        return temp;
    } else {
        return arr;
    }
}
let arr = [1,2,3,2,2,2,5,4,2];
console.log(MoreThanHalfNum_Solution(arr));
let obj = {'1':1};
obj[1]++;
console.log(obj);