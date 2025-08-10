function solution(land) {
    for(let i=1; i<land.length; i++){
        for(let j=0; j<land[i].length; j++){
            const arr = land[i-1].filter((n, idx)=> j !== idx);
            const prevMax = Math.max(...arr)
            land[i][j] += prevMax;
        }
    }
    return Math.max(...(land.pop()));
}