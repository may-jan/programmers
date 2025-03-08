function solution(absolutes, signs) {
    var answer = 0
    absolutes.map((num, idx)=>{
        signs[idx] ? answer+=num : answer-=num
    })
    return answer;
}