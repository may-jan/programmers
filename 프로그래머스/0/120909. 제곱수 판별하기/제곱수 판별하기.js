function solution(n) {
    const isSqrt = Number.isInteger(Math.sqrt(n));
    return isSqrt ? 1 : 2;
}