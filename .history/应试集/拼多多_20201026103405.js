var person={
    name:'pdd',
    action:function(func){
        func();
        arguments.name='pinduoduo';
        arguments[0]();
    }
};

var this.name='拼多多';

function show(){
    console.log(this);
    console.log('-----------')
    console.log(this.name);
}

//person.action(show);
show();