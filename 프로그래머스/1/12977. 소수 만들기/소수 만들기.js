function solution(nums) {
    var answer = 0;
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                const num = nums[i]+nums[j]+nums[k]; 
                 if (isPrime(num)) {
                    answer+=1;
                }
            }
        }
    }
    return answer;
}

function isPrime(num){
    if (num < 2) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false   
        }
    }
    return true;
}
    