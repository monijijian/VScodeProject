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
        console.log(`左右子树都为空  node  ${JSON.stringify(node)}`);
        return arr;
    }
    arr[deep]=[];
    if(node.left){
        arr[deep].push(node.left.value);
        console.log(`节点 ${JSON.stringify(node)}   左子树节点  ${JSON.stringify(node.left)} `);
        if(node.left==null){console.log("这尼玛就离谱")}
        setArr(node.left,deep+1,arr);
    }
    if (node.right) {
        arr[deep].push(node.right.value);
        console.log(`节点 ${JSON.stringify(node)}   右子树节点  ${JSON.stringify(node.right)} `);
        setArr(node.right,deep+1,arr);
    }
}
console.log(leftValue(tree));