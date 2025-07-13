function solution(i, j, k) {
    var answer = 0;
    for(let l=i; l<=j; l++){
        for(let m=0; m<String(l).length; m++){
            if(String(l)[m] == k) answer++;
        }
    }
    return answer;
}