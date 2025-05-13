function solution(myString) {
    var answer = '';
    const num = "l".charCodeAt();
    for(let i=0; i<myString.length; i++){
        myString[i].charCodeAt() < num ?
            answer += "l" : answer += myString[i];
    };
    return answer;
}