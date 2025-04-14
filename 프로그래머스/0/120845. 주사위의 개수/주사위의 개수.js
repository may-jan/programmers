function solution(box, n) {
    var answer = 1;
    box.forEach((len)=>{
        answer *= Math.floor(len / n);
    })
    return answer;
}