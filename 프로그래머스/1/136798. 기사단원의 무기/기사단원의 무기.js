function solution(number, limit, power) {
    var answer = 0;
    const arr = Array(number + 1).fill(0);
    for(let i=1; i<=number; i++){
        for(let j=i; j<=number; j+=i) {
        arr[j] += 1;
        }
    }
    arr.forEach((num)=>{
        num <= limit ? answer += num : answer += power;
    })
    
    return answer;
}