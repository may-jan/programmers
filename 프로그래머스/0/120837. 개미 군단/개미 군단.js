function solution(hp) {
    var answer = 0;
    var temp = hp;
    const ants = [5, 3, 1];
    ants.forEach((ant)=>{
        answer += Math.floor(temp / ant);
        temp = Math.floor(temp % ant);
    })
    return answer;
}