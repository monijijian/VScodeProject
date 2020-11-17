//时间复杂度的计算： 看语句中执行次数最多的那一句，只看最多的，就是时间复杂度 ； 如果次数是和n没有关系的常数，那么其时间复杂度就是O(1)
//常见的时间复杂度大小：常数阶O(1)<对数阶O(log2n)<线性阶O(n)<线性对数阶O(nlog2n)<平方阶O(n^2)<立方阶O(n^3)<O(n^k)<指数阶O(2^n)<O(n!)<O(n^n)

//冒泡排序（bubble sort） 时间复杂度O(n^2)
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){//因为是j 和j+1进行比较。为了不溢出需要 j<len-i-1
            if(arr[j]>arr[j+1]){//大的项往后排，每次排序会找到当前最大项放到最后一位
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }

            //三元表达式 必须得有两种路径
            //arr[j]>arr[j+1] ? [arr[j],arr[j+1]]=[arr[j+1],arr[j]]:arr[j]=arr[j];
        }
    }
}


//选择排序 时间复杂度一直是O(n^2)
//每次选择出最小的一项放在前面 ，和冒泡排序很像
function selectionSort(arr){
    let len = arr.length;
    let minIndex;
    for(let i=0;i<len-1;i++){
        minIndex=i;
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }//找出后面最小的一项的索引
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];//把最小一项放在前面
    }
}

//插入排序  Insertion Sort 时间复杂度O(n^2)
function insertionSort(arr){
    let len=arr.length;
    let preIndex,current;
    for(let i=1;i<len;i++){
        preIndex=i-1;
        current=arr[i];
        while(preIndex>=0&&arr[preIndex]>current){
            arr[preIndex+1]=arr[preIndex];
            preIndex--;
        }//这一段代码 把i抽出  前面的依次补上 最终空出了pre+1的位置
        arr[preIndex+1]=current;//把i放在这里
    }
}


//希尔排序 
//是插入排序的优化算法
function shellSort(arr){
    let len=arr.length,temp,gap=1;
    
}


// 快速排序
// 冒泡排序上的递归分治法  效率很高的算法，虽然最坏情况O(n^2)，但大多数情况都好于O(nlog2n)
function quickSort(arr){
    if(arr.length<=1){//退出条件
        return arr;
    }

    //选择一个基准  ，小的排左边，大的排右边
    //重点：得把这个基准拿出来不参与比较
    var temp = arr.splice(Math.floor(arr.length / 2),1)[0],left=[],right=[];
    for(let i of arr){
        i<temp?left.push(i):right.push(i);
    }
    console.log(`left ${[...left]}  right ${[...right]}`)
    //进行递归
    return  [...quickSort(left),temp,...quickSort(right)];
}


//归并排序
//典型的分而治之思想 ，以空间换取时间 ，时间复杂度O(nlog2n)
function mergeSort(arr){
    if(arr.length<2){//首先设置退出递归得条件
        return arr;
    }

    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid),right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){//合并归序
    let res=[];//设置结果数组
    while(left.length&&right.length){//left、right数组的长度都不为0时进行循环
        if(left[0]<=right[0]){//比较两数组首个元素大小
            res.push(left.shift());
        }else{
            res.push(right.shift());//shift 方法移除数组头部的一个元素
        }
    }
    if(left.length){//经过上一步小的都被弹出添加到res中了，剩下的都是大数
        res.push(...left);
    }
    if(right.length){
        res.push(...right);
    }
    return res;
}

let arr=[44,13,8,5,2,7];
console.log(mergeSort(arr));