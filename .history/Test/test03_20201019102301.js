var obj = {
    name: '轩辕Rowboat',
};
function original(a, b) {
    console.log('this', this); // original {}
    console.log('typeof this', typeof this); // object
    this.name = b;
    console.log('name', this.name); // 2
    console.log('this', this);  // original {name: 2}
    console.log([a, b]); // 1, 2
}
var bound = original.bind(obj, 1);
// var newBoundResult = new bound(2);
bound(2);
//console.log(newBoundResult, 'newBoundResult'); // original {name: 2}

let or = new original();
console.log(or instanceof original);

function S1 (name){
    if(this instanceof S1){
        this.name=name;
        console.log('name',name);
    }else{
        throw new Error('必须通过new关键字来调用Student');
    }
}

function S2(name){
    if(typeof new.target !== 'undefined'){
        this.name = name;
        console.log('name', name);
    }else{
        throw new Error('必须通过new关键字来调用Student');
    }
}

let s1=new S1('s1');
S1.call(s1,'改变this');//可以通过call来绕过 instanseof 判断

// let s2=new S2('s2');
// S2.call(s2,'改变this');//绕不过new target判断

let obj1 = {};
console.log(obj1.__proto__==Object.prototype,S1.__proto__==Function.prototype,Object.prototype)
console.log(typeof S2.prototype);
console.log(Function.__proto__==Function.prototype);
console.log(Function.prototype.__proto__ == Object.prototype);
console.log(S1.__proto__==Function.prototype);