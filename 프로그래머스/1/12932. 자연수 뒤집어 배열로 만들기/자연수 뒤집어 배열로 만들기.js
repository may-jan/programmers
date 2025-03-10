function solution(n) {
    var answer = [];
    for(let i=String(n).length-1; i>=0; i--){
        const num = String(n)[i];
        answer.push(Number(num));
    }
    return answer;
}