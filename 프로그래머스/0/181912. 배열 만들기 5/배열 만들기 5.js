function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach((str)=>{
        let sliceStr = Number(str.slice(s, s+l));
        if(sliceStr > k) answer.push(sliceStr);
    })
    return answer;
}