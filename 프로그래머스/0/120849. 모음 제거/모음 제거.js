function solution(my_string) {
    var answer = "";
    const test = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < my_string.length; i ++){
        test.includes(my_string[i]) ? "" : answer += my_string[i];
    }
    return answer;
}