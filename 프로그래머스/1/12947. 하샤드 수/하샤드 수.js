function solution(x) {
    let hap = 0;
    const arr = String(x).split("");
    arr.map((num)=>{
        hap += Number(num)
    })
    return x % hap == 0 ? true : false;
}