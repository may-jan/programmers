function solution(arr, queries) {
    var answer = arr;
    queries.forEach((query) => {
        for(let i=query[0]; i<=query[1]; i++){
            answer[i] ++;
        }
    })
    return answer;
}