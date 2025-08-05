function solution(n, k) {
    var answer = 0;
    const str = n.toString(k);
    const regex = /[1-9]*/g;
    const arr = str.match(regex).filter(s => s !== "" && s !== "1");
    arr.forEach((a) => {
        let isPrime = true;
        for(let i=2; i<=Math.sqrt(a); i++){
            if(a % i == 0) return isPrime = false
        }
        if(isPrime){
            answer += 1;
        }
    })
    return answer;
}