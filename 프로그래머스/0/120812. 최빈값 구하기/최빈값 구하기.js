function solution(array) {
    if(array.length === 1) return array[0];
    
    const map = new Map();
    array.forEach((e) => map.set(e, (map.get(e) || 0) + 1));
    
    const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    const [aNum, aMax] = sorted[0];
    const bMax = sorted[1]?.[1] ?? 0;
    
    return aMax === bMax ? -1 : aNum;    
}