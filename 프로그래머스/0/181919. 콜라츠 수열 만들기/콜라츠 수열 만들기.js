function solution(n) {
    var answer = [];
    let x = n;
    answer.push(x);
    while(x != 1){ 
        x % 2 == 0 ? x = x / 2 : x = 3 * x + 1;
        answer.push(x);
    }
    return answer;
}