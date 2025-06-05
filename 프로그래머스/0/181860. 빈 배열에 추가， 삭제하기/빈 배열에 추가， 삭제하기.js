function solution(arr, flag) {
    var res = '';
    arr.forEach((num,idx)=>{
        flag[idx] ? res += `${num}`.repeat(num*2) : res = res.slice(0,-num);
    })
    return res.split("").map((num)=>Number(num))
}