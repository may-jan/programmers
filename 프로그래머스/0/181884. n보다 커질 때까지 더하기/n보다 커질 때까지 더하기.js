function solution(numbers, n) {
    var answer = 0;
    numbers.forEach((num)=>{
        return answer > n ? answer : answer += num;
    })
    return answer;
}