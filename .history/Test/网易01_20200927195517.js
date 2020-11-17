function solution(data) {
    // write code here
    var arr = [];
    var bol = true;
    for (let i of data) {
        if (i == '[') {
            arr.push(1);
        } else if (i == '.') {
            arr.push('x');
        } else if (i == ']') {
            arr.push(-1);
        } else {
            arr.push(0);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i == 1 && j == -1) {
                arr[i] = 0;
                arr[j] = 0;
            }
        }
    }
    for (let i of arr) {
        if (i == -1 || i == 1) {
            bol = false;
        }
    }
    if (bol) {
        return bol;
    }
    var flag = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (flag == 0) {
            switch (arr[i]) {
                case -1:
                    flag += 1;
                    break;
                case 'x':
                    flag -= 1;
                    break;
                case 1:
                    flag -= 1
                    break;
                case 0:
                    break;
            }
        } else if (flag < 0) {
            switch (arr[i]) {
                case -1:
                    flag += 1;
                    break;
                case 'x':
                    flag += 1;
                    break;
                case 1:
                    flag -= 1
                    break;
                case 0:
                    break;
            }
        } else {
            return false;
        }
    }
    return ture;
}
console.log(solution('[[[.]]]]'))