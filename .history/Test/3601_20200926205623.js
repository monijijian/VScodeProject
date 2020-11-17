// var line;
// var solveMeFirst = (a, b) => a + b;
// while ((line = read_line()) != '') {
    
//     print(c);
// }
// let arr = line.split(' ');
// let a = parseInt(arr[0]);
// let b = parseInt(arr[1]);
// let k = paresInt(arr[2]);
// let v = paresInt(arr[3]);

let c = solve(10,3,2,1);
console.log(c);
console.log(solve(10, 3, 2, 2));
function solve(a, b, k, v) {
    let box = 0;
    let can = 0;
    if (b <= k - 1) {
        can = (b + 1) * v;
    } else {
        b % (k - 1) == 0 ? can =b / (k - 1)* k * v : can = Math.floor(b / (k - 1)) * k * v + (b % (k - 1) + 1) * v;
    }
    b % (k - 1) == 0 ? box = b / (k - 1) : box = Math.floor(b / (k - 1)) + 1;
    console.log(`can ${can} box ${box}`);
    if (can * v == a) {
        return box;
    } else if (can * v < a) {
        box = box + (a - can * v);
        return box;
    } else {
        if (b % (k - 1) == 0) {
            box = box - Math.floor((can * v - a) / k);
        } else {
            a - can * v <= b % (k - 1) ? box -= 1 : box = box - Math.floor((can * v - a - b % (k - 1)) / k) - 1;
        }
        return box;
    }
}