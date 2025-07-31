function solution(numbers) {
    var answer = 0;
    const nums = numbers.split("");
    const set = new Set();
    
    // set에 순열 셋팅
    for(let i=1; i<=nums.length; i++){
        const perms = getPermutations(nums, i);
        perms.forEach((p) => {
            set.add(Number(p.join("")));
        });
    }
    
    // 소수 카운팅
    let count = 0;
    set.forEach((num) => {
        if(isPrime(num)) count++;
    });

    return count;
}

// 순열 재귀 함수
function getPermutations(arr, selectNumber){
    if(selectNumber === 1) return arr.map(n => [n]);
    const res = [];
    arr.forEach((fixed, idx, origin) => { 
        const rest = [...origin.slice(0,idx), ...origin.slice(idx+1)];
        const permutations = getPermutations(rest, selectNumber - 1);
        const attached = permutations.map(p => [fixed, ...p]);
        res.push(...attached);
    })
    return res;   
}

// 소수 판별 함수
function isPrime(n){
    if(n < 2) return false;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i === 0) return false;
    }
    return true;
};