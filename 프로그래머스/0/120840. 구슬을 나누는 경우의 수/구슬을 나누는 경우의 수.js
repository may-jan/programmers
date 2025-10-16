function solution(balls, share) {
    if(balls == share) return 1;
    
    let res = 1;
    for(let i=1; i<=share; i++){
        res = res * (balls - i + 1) / i
    }
    
    return res
}