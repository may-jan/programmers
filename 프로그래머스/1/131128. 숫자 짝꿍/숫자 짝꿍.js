function solution(X, Y) {
    var answer = '';
    const cntX = Array(10).fill(0);
    const cntY = Array(10).fill(0);
    for(let n of X) cntX[n]++;
    for(let n of Y) cntY[n]++;
    for(let i=9; i>=0; i--){
        const cnt = Math.min(cntX[i], cntY[i]);
        answer += i.toString().repeat(cnt);
    }
    return answer === "" ? "-1" : (answer[0] === "0" ? "0" : answer);
}