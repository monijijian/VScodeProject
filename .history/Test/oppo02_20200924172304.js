// var a = 0;
// function test(){
//     var a=1;
//     setTimeout(()=>{
//         console.log(a);
//         a=2;
//     },2000);
//     a =3;
//     setTimeout(function(){
//         console.log(a);
//         a=4;
//     },1000);
// }
// test();
// console.log(a);

function add(){
    var yin = 0;
    return (function(){
        return yin++;
    });
}
add();
add();

