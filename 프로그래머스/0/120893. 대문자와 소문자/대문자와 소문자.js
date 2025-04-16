function solution(my_string) {
    var answer = '';
    for(let i=0; i<my_string.length; i++){
        answer += my_string[i].charCodeAt() > 96 ? my_string[i].toUpperCase() : my_string[i].toLowerCase(); 
    }
    return answer;
}