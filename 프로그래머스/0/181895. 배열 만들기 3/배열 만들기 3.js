function solution(arr, intervals) {
    var answer = [];
    intervals.forEach((interval)=>{
        const [a, b] = interval;
        answer.push(...arr.slice(a, b+1));
    })
    return answer;
}