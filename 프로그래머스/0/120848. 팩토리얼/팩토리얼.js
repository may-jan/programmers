function solution(n) {
    var answer = 1;
    let i = 1;
    while(answer * (i + 1) <= n){
        i++;
        answer *= i;
    }
    return i;
}