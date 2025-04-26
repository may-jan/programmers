function solution(myString) {
    var answer = [];
    myString.split("x").forEach((o)=>{
        answer.push(o.length);
    });
    return answer;
}