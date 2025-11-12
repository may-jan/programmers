function solution(num, total){
    const answer = [];
    const start = total/num - (num-1)/2;
    for(let i=0; i<num; i++){
        answer.push(start+i);
    }
  return answer;
}
