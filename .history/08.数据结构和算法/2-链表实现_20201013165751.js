class ListNode{
    constructor(key){
        this.next=null;
        this.key=ley;
    }
}

class List{
    constructor(){
        this.head=null;
        this.length=0;
    }
    static createNode(key){
        return new ListNode(key);
    }

    //往头部插入数据
    insert(node){
        //如果头部有节点
        if(this.head){
            node.next=this.head;
        }else{
            node.next=null;
        }
        //无论如何都成了头部节点
        this.head=node;
        this.length++;
    }

    find(key){//查找结点
        if (this.length == 0) {
            throw 'the List is null';
        }

        let node = this.head;//从头节点开始向后查找
        while(node.key!=key&&node!=null){
            node=node.next;
        }
        if(node==null) throw 'node is not in the List';
        return node;
    }

    delete(node){
        if(this.length==0){
            throw 'the List is null';
        }

        let pre = this.head;
        while(node!=pre.next&&pre!=null){
            pre = pre.next
        }
        if(pre.next){
            pre.next = node.next;
            this.length--;
        }else{
            throw 'the node no exits'
        }

    }
}

//双向链表
class DoubleNode{
    constructor(key){
        this.pre=null;
        this.key=key;
        this.next=null;
    }
}
class DoubleLinkedList{
    constructor() {
        this.head=null;
    }
    static createNode(key){
        return new DoubleNode(key);
    }
    insert(node){

    }
    search(key){

    }
    delete(node){

    }
}


//另一种链表的实现
class LinkedLisr{
    constructor(value){
        this.head={value,newt:null};//头部
        this.tail=this.head;//尾部
    }

    insert(value){//从尾部插入
        const node={value,next:null};//根据新传入的值创建一个节点
        this.tail.next = node;//尾部的next指向node
        this.tail=node;//node成为新的尾部
    }

    find(value){//输入值进行查找
        if(this.head.value==value){
            return this.head;
        }
        let pre = this.head;
        let cur=pre.next;
        while(cur.value!=value&&cur!=null){
            pre = cur;
            cur=cur.next;
        }
        if(cur){
            return cur;
        }else{
            return false;
        }
    }

    removeNode(value){
        if (this.head.value == value) {
            this.head = this.head.next;
            return true;
        }
        let pre = this.head;
        let cur = pre.next;
        while (cur.value != value && cur != null) {
            pre = cur;
            cur = cur.next;
        }
        if (cur) {
            pre.next=cur.next;
            return true;
        } else {
            return false;
        }
    }
}

//哈希列表
class HashTable{
    constructor(size){
        //定义哈希表的大小，将在哈希函数中使用
        this.size=size;
        this.storage=[];
    }
    insert(key,value){
            //获取数组中的索引
            const index=this.myHashingFunction(key,this.size);
            //处理冲突-哈希函数为不同的键返回相同的索引
            //在复杂的哈希函数中，很可能发生
            if(!this.storage[index]){//如果没有存储这个索引值,那么为这个索引配一个数组
                this.storage[index] = [];
            }
        //push 新的键值对
        this.storage[index].push([key,value]);
    }
    get(){

    }
    remove(){

    }

    //计算散列密钥的方式
    myHashingFunction(str,n){
        let sum=0;
        for(let i in str){
            sum+=str.charCodeAt(i)*3;//charCodeAt 返回字符串指定位置的unicode编码
        }
        return sum%n;
    }
}

const ht = new HashTable(5);
ht.insert('a',1);
ht.insert('n',5)
console.log(...ht.storage);