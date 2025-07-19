function solution(before, after) {
    var answer = 1;
    const map = new Map();
    for(let i=0; i<before.length; i++){
        map.set(before[i], (map.get(before[i])||0) + 1)
    }
    for(let i=0; i<after.length; i++){
        map.set(after[i], (map.get(after[i])||0) - 1)
    }    
    map.forEach((value, key) => {
        if(value !== 0) answer = 0
    })
    return answer;
}