function cuttingStr(str){
    const arr = [];
    for(let i=0; i<str.length-1; i++){
        const sliceStr = str.slice(i, i+2);
        arr.push(sliceStr)
    }
    return arr;
}

function filteringStr(str, reg){
    return str.filter(s => reg.test(s)).map((s) => s.toUpperCase());
}

function solution(str1, str2) {
    var answer = 0;
    const str1Arr = cuttingStr(str1);
    const str2Arr = cuttingStr(str2);
    const reg = /^[a-zA-Z]{2}$/;
    
    const setA = filteringStr(str1Arr, reg);
    const setB = filteringStr(str2Arr, reg);
    
    if (setA.length === 0 && setB.length === 0) return 65536;
  
    let intersection = 0;

    const mapB = new Map();
    setB.forEach((s) => {
        mapB.set(s, (mapB.get(s) || 0) + 1)
    })
   
    setA.forEach((t) => {
        if(mapB.get(t)>0){
            intersection += 1;
            mapB.set(t, (mapB.get(t) || 0) -1);
        }
    })
    
    const union = setA.length + setB.length - intersection;
    
    return Math.floor((intersection / union) * 65536);
}