function solution(a, d, included) {
    var answer = 0;
    included.forEach((boolean, idx) => {
        if(boolean) answer += a + (d*idx);
    })
    return answer;
}