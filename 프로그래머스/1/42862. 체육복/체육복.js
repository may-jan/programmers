function solution(n, lost, reserve) {
    let realLost = lost.filter((x) => !reserve.includes(x)).sort((a, b) => a - b);
    let realReserve = reserve.filter((x) => !lost.includes(x)).sort((a, b) => a - b);
    
    for(let i=0; i<realReserve.length; i++){
        if(realLost.includes(realReserve[i] - 1)){
            realLost.splice(realLost.indexOf(realReserve[i] - 1), 1);
        }else if(realLost.includes(realReserve[i] + 1)){
            realLost.splice(realLost.indexOf(realReserve[i] + 1), 1);
        }
    }
    
    return n - realLost.length;
}