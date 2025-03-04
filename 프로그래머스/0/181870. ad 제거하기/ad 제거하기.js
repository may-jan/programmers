function solution(strArr) {
    var answer = [];
    strArr.map((str) => {
        str.includes("ad") ? "" : answer.push(str);
    })
    return answer;
}