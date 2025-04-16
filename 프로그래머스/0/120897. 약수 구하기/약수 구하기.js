function solution(n) {
    var answer = [];
    var temp = n;
    for(let i=1; i<=n; i++){
        if(n%i == 0) answer.unshift(n/i); 
        temp = n/i;
    };  
    return answer;
}