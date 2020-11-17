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
    value:'1',
    left:{
        value:'2',
        left:{
            value:'4',
            left:'null',
            right:'null',
        },
        right:null,
    },
    right:{
        value:'3',
        left:{
            value:'5',
            left:{
                value:'7',
                left:'null',
                right:'null'
            },
            right:null
        },
        right:{
            value:'6',
            left:null,
            right:null,
        }
    }
}

function leftValue(tree){
    let arr =[],node=tree,deep=1;
    let res=setArr(node,deep,arr);
    return res;//res[res.length-1][0];
}

function setArr(node,deep,arr){
    if(node.left==null&&node.right==null){
        return arr;
    }
    arr[deep]=[];
    if(node.left){
        arr[deep].push(node.left.value);
        setArr(node.left,deep+1,arr);
    }
    if (node.right) {
        arr[deep].push(node.right.value);
        setArr(node.right,deep+1,arr);
    }
}
leftValue(tree);