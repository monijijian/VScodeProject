var person={
    name:'pdd',
    action:function(func){
        func();
        arguments.name='pinduoduo';
        arguments[0]();
    }
};

var name='拼多多';

function show(){
    console.log(this);
    console.log('-----------')
    console.log(this.name);
}

//person.action(show);
show();

//树的方法
const tree={
    
}