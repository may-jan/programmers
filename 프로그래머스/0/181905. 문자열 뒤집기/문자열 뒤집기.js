function solution(my_string, s, e) {
    var answer = '';
    const sliceStr = my_string.slice(s,e+1);
    const reverseStr = [...sliceStr].reverse();
    answer += my_string.slice(0, s);
    answer += reverseStr.join("");
    answer += my_string.slice(e+1);
    return answer;
}