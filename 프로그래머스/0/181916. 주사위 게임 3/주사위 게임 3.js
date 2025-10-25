function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const counts = {};

    for(let x of arr){
        counts[x] = (counts[x]||0) + 1;
    }
    
    const entries = Object.entries(counts)
    .map(([num, cnt]) => [Number(num), cnt])
    .sort((a, b) => b[1] - a[1]);
    
    
     if(entries.length === 1){
         // 4개
         return 1111 * entries[0][0];
     }else if(entries.length === 2){
         const [p, pCnt] = entries[0];
         const [q, qCnt] = entries[1];
         if(pCnt === 3){ 
             // 3개+1개
             return (10*p+q) ** 2;
         }else{
             // 2개+2개
             return (p+q) * Math.abs(p-q);
         }
     }else if(entries.length === 3){
         // 2개+1개+1개
         const others = entries.filter(e => e[1] === 1).map(e => e[0]);
         return others[0] * others[1];
     }else{
         // 1개+1개+1개+1개
         return Math.min(...arr);
  }
}