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
s1;