function solution(arr, k) {
    var answer = [];
    const set = new Set();    
    for(let i=0; i<arr.length; i++){
        if(answer.length >= k) break;
        if(!set.has(arr[i])){
            set.add(arr[i]);
            answer.push(arr[i]);
        }
    }
    
    while(answer.length < k){
        answer.push(-1);
    }

    return answer;
}