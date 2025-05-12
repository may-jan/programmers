function solution(numLog) {
    var answer = '';
    let num = 0;
    numLog.map((log)=>{
        const cal = log-num;
        if(cal == 1) answer += "w";
        if(cal == -1) answer += "s";
        if(cal == 10) answer += "d";
        if(cal == -10) answer += "a";
        num = log;
    })
    return answer;
}