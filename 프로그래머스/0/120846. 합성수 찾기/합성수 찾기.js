function solution(n) {
    var answer = 0;
    for(let i=4; i<=n; i++){
        let temp = 0;
        for(let j=1; j<=i; j++){
            if(i % j === 0) temp++;
        }
        if(temp >= 3) answer++;
    }
    return answer;
}