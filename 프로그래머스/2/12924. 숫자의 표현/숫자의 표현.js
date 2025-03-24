function solution(n) {
    var answer = 1;
    for(let i=1; i<=n/2; i++){
        var sum = 0;
        var temp = i;
        while(sum < n){
            sum += temp
            temp++;
        }
        if(sum == n) answer+=1;
    };
    return answer;    
}