function solution(sides) {
    var answer = 0;
    const min = Math.min(...sides);
    const max = Math.max(...sides);
    for(let i=1; i<=max; i++){
        if(max < min + i) answer++;
    }
    for(let i=max+1; i<min+max; i++){
        answer++;
    }
    return answer;
}