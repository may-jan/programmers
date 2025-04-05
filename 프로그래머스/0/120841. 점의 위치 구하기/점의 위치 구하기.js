function solution(dot) {
    var answer = 0;
    const [x, y] = dot;
    if(x > 0){
        answer = y > 0 ? 1 : 4;
    }else{
        answer = y > 0 ? 2 : 3;
    }
    return answer;
}