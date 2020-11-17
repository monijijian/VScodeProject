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
//show();
var p1 =new person();
p1.action(show);