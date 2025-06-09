function solution(str1, str2) {
    var answer = 0;
    str1.indexOf(str2) === -1 ? answer = 2 :  answer = 1;
    return answer;
}