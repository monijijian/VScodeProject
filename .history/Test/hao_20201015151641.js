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
        if (bol) {
            arr.push[i];
            num[i] = 1;
        } else {
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
        return 0;
    }
}