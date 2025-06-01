function solution(my_string) {
    var answer = '';
    [...my_string].forEach((str)=>{
        if(!answer.includes(str)) answer += str
    })
    return answer;
}