function solution(rank, attendance) {
    let arr = [];
    rank.forEach((r, idx)=>{
        if(attendance[idx]) arr.push({r:rank[idx], idx});
    });
    arr.sort((a,b) => a.r-b.r);
    const [a, b, c] = [arr[0].idx, arr[1].idx, arr[2].idx];
    return 10000*a + 100*b + c;
}