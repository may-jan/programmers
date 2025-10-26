function solution(arr, query) {
    query.forEach((q, idx)=>{
        if(idx%2 == 0){
            arr = arr.slice(0, query[idx]+1);
        }else{
            arr = arr.slice(query[idx]);
        }
    })
    return arr;
}