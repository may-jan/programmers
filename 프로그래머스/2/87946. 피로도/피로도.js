function solution(k, dungeons) {
    let max = 0;
    const permutations = getPermutations(dungeons, dungeons.length);
    
    permutations.forEach((p)=>{
        let fatigue = k;
        let count = 0;
        
        for(let [min, cost] of p){
            if(fatigue >= min) {
                fatigue -= cost;
                count ++;
            }else{
                break;
            }
        }
        if(count > max) max = count;
    })
    return max;
}

function getPermutations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];
  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const perms = getPermutations(rest, n - 1);
    const attached = perms.map((perm) => [fixed, ...perm]);
    result.push(...attached);
  });

  return result;
}