// function Stu (){}

// Stu.prototype.name ='echo';
// Stu.prototype.age = 20;

// var s = new Stu();

// console.log(s.prototype);
// console.log(JSON.stringify(s)  +  typeof s + s.name);
// console.log(Stu.prototype.constructor);
// console.log(s.constructor);

// var line;

var solveMeFirst = (a, b) => {
    var flag = 0
    for (var i = a;i< b+1; i++) {
        let one = Math.floor(i / 10000);
        let two = Math.floor(i / 100) - Math.floor(i / 10000) * 100;
        let thr = i - Math.floor(i / 100) * 100;
        // console.log(a,b,i,one,two,thr)
        var str = i.toString();
        var num = 0;
        for(var x=0;x<str.length;x++){
            for(var y=x;y<str.length;y++){
                if(str[x] == str[y]){
                    num++;
                }
            }
        }
        // console.log(str,str[4]);
        if (one + two == thr && one > 9 && two > 9 && thr > 9) {
            flag++;
            console.log(i,one,two,thr)
        }
    }
    return flag;
};

// while ((line = read_line()) != '') {
//     let arr = line.split(' ');
//     let a = parseInt(arr[0]);
//     let b = parseInt(arr[1]);
//     let c = solveMeFirst(a, b);
//     print(c);
// }
// console.log(solveMeFirst(123456,123458));
console.log(solveMeFirst(100000, 110000));
