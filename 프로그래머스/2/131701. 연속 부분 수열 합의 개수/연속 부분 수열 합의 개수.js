function solution(elements) {
    const concatElements = elements.concat(elements);
    const n = elements.length;
    const set = new Set();
    for(let i=0; i<n; i++){
        let sum = 0;
        for(let j=0; j<n; j++){
            sum += concatElements[i+j]
            set.add(sum);
        }
    }
    return set.size;
}