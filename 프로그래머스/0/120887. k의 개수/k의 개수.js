function solution(i, j, k) {
    let arr = [];
    for(let l=i; l<=j; l++){
        const splited = String(l).split("");
        arr.push(...splited);
    }
    return arr.filter((a)=> a==k).length;
}