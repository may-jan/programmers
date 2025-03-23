function solution(s) {
    var answer = [0, 0];
    while(s !== "1"){
        s = s.split("");
        let changeStrLength = s.filter((num)=> num === "1").length;
        answer[0] ++;
        answer[1] += s.length - changeStrLength;
        s = changeStrLength.toString(2);
    }
    return answer;
}