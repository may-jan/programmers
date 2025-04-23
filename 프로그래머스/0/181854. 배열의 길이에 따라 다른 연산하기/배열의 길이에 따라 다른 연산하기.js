function solution(arr, n) {
    var answer = [];
    if(arr.length % 2 == 1){
        for(let i=0; i<arr.length; i++){
            i % 2 == 0 ? answer.push(arr[i]+n) : answer.push(arr[i])
        }
    }else{
        for(let i=0; i<arr.length; i++){
            i % 2 == 1 ? answer.push(arr[i]+n) : answer.push(arr[i])
        }
    }
    return answer;
}