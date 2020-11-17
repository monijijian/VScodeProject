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
    
}



let arr=[44,13,8,5,2,7];
bubbleSort(arr);
console.log(arr);