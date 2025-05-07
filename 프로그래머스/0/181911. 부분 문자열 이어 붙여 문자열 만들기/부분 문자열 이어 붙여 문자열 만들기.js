function solution(my_strings, parts) {
    var answer = '';
    parts.forEach((part, idx)=>{
        const string = my_strings[idx].slice(part[0], part[1]+1);
        answer += string;
    });
    return answer;
}