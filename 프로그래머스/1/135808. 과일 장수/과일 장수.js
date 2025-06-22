function solution(k, m, score) {
    var answer = 0;
    const sortedScore = score.sort((a,b) => b-a);
    for(let i=0; i<sortedScore.length; i+=m){
        let arr;
        arr = sortedScore.slice(i, i+m);
        if(arr.length == m){
            answer += Math.min(...arr) * m;
        }
    }
    return answer;
}