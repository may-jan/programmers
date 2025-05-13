function solution(a, b, c) {
    var answer = 0;
    const check = new Set([a, b, c]);
    const res1 = a + b + c;
    const res2 = res1 * (a**2 + b**2 + c**2);
    const res3 = res2 * (a**3 + b**3 + c**3);
    if(check.size == 3) answer = res1
    if(check.size == 2) answer = res2;
    if(check.size == 1) answer = res3;
    return answer;
}