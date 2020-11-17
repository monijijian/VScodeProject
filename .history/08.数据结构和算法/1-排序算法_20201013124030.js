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

    //选择一个基准，小的排左边，大的排右边
    var temp = arr[Math.floor(arr.length / 2)],left=[],right=[];
    for(let i in arr){
        i<temp?left.push(i):right.push(i);
    }

    //进行递归
    return quickSort(left).concat([temp], quickSort(right));// return [...quickSort(left),temp,...quickSort(right)];
}

// function quickSort(arr) {
//     if (arr.length <= 1) { return arr; }
//     var pivotIndex = Math.floor(arr.length / 2);
//     var pivot = arr.splice(pivotIndex, 1)[0];
//     var left = [];
//     var right = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat([pivot], quickSort(right));
// };


let arr=[44,13,8,5,2,7];
console.log(quickSort(arr));