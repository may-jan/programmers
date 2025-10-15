function solution(n, k) {
    var answer = [];
    const nums = Array.from({length:n}, (_, i) => i+1);
    const factorial = [1];
    for(let i=1; i<=n; i++){
       factorial[i] = factorial[i-1] * i;
    }
    
    let K = k - 1;   // 인덱스 조정

    for(let i=n; i>0; i--){
        const idx = Math.floor(K/factorial[i-1]);
        answer.push(nums[idx]);
        nums.splice(idx, 1);
        K %= factorial[i-1];
    }

    return answer;
}