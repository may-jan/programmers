function solution(arr1, arr2) {
    if(arr1.length > arr2.length){
        return 1;
    }else if(arr1.length < arr2.length){
        return -1;
    }else{
        const add1 = arr1.reduce((acc,cur) => acc+cur, 0);
        const add2 = arr2.reduce((acc,cur) => acc+cur, 0);
        return add1 == add2 ? 0 : (add1 > add2 ? 1 : -1)
    }
}