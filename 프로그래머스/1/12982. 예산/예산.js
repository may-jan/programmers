function solution(d, budget) {
    var answer = 0;
    let temp = 0;
    d.sort((a, b) => a - b);
    for(let i=0; i<d.length; i++){
        if(temp <= budget){
            temp += d[i];
            temp <= budget ? answer ++ : "";
        }
    }
    return answer;
}