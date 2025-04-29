function solution(arr) {
    var answer = [];
    arr.forEach((num) => {
        if(num>=50){
            num % 2 == 0 ? answer.push(num/2) : answer.push(num)
        }else {
            num % 2 == 1 ? answer.push(num*2) : answer.push(num)
        }
    })
    return answer;
}