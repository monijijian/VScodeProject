//数组的解构赋值

let [a,b,c] = [1,2,3];
//解构时，左边允许有默认值
let [a,b='jijiboy'] = ['aa','bb'];
console.log('a : '+ a  + 'b : ' +b);