function solution(rsp) {
    var answer = '';
    rsp.split("").forEach((user)=>{
        user == "2" ? answer += "0" : user == "0" ? answer += "5" : answer += "2";
    })
    return answer;
}