function solution(n) {
    const MOD = 1000000007;
    if(n === 1) return 1;
    if(n === 2) return 2;

    let a = 1;
    let b = 2;

    for(let i=3; i<=n; i++){
        const next = (a+b) % MOD;
        a = b;
        b = next;
    }
    return b;
}