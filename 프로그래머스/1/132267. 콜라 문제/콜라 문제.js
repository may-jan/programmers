function solution(a, b, n) {
    var answer = 0;
    let bottle = n;  
    while(bottle >= a){
        let newBottles = Math.floor(bottle / a) * b;
        answer += newBottles;
        bottle = newBottles + (bottle % a);
    }    
    return answer;
}