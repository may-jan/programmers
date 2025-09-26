function solution(score) {
  const n = score.length;
  const answer = Array(n).fill(1);  // 기본 등수를 1로 설정

  const avgs = score.map(s => (s[0] + s[1]) / 2);

  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(avgs[j] > avgs[i]){
        answer[i]++;
      }
    }
  }
  return answer;
}