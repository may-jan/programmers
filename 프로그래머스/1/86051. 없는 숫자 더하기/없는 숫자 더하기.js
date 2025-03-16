function solution(numbers) {
    let answer = 0;
    for(let i=0; i<=9; i++){
        answer += i;
    }
    numbers.forEach((num)=>{
        return answer -= num;
    })
    return answer;
}