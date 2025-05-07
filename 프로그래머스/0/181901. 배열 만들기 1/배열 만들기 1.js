function solution(n, k) {
    var answer = [];
    let num = 1;
    while(k * num <= n){
        answer.push(k * num);
        num ++;
    };
    return answer;
}