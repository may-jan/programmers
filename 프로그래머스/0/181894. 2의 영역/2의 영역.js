function solution(arr) {
    var answer = [];
    let idxArr = [];
    arr.forEach((num, idx) => {
        if(num==2) idxArr.push(idx);
    });

    if(idxArr.length >= 2){
        const idx1 = idxArr[0];
        const idx2 = idxArr.at(-1);
        return arr.slice(idx1, idx2+1);
    }
    if(idxArr.length == 1){
        const idx = idxArr[0];
        return [arr[idx]];
    }
    if(idxArr.length == 0){
        return [-1]
    }
}