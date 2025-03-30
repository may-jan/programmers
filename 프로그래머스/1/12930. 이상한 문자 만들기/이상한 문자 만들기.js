function solution(s) {
    var answer = "";
    let idx = 0;
    const sArr = s.toLowerCase().split("");
    sArr.forEach((str) => {
        if(str == " "){
            answer += " ";
            idx = 0;
            return;
        }
        idx % 2 == 0 ? answer += str.toUpperCase() : answer += str;
        idx ++;
    });
    return answer;
}