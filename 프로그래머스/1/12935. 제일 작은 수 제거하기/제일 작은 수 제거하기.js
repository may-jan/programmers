function solution(arr) {
    var answer = [];
    const minNum = Math.min(...arr);
    arr.map((num)=>{
        if(num !== minNum){
            answer.push(num)
        }
    })
    if(answer.length === 0){
        answer.push(-1)
    }
    return answer
}