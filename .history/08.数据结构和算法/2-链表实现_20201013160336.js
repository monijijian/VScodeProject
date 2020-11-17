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