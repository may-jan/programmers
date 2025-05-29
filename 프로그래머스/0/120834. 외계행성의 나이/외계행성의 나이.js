function solution(age) {
    var answer = '';
    const strAge = String(age);
    for(let i=0; i<strAge.length; i++){
        const charCodeNum = Number(strAge[i])+97;
        answer += String.fromCharCode(charCodeNum)
    }
    return answer;
}